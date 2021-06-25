import React, { createContext, useContext, useState } from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SCOPE,
  CLIENT_ID,
  CDN_IMAGE,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "../configs";
import { COLLECTION_USERS } from "../configs";
import { api } from "../services/api";
import { useEffect } from "react";

//if used .env
//const {SCOPE} = process.env
//... following

interface User {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User | null;
  loading: boolean;
  singIn: () => Promise<void>;
  singOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type DiscordAuthResponse = AuthSession.AuthSessionResult & {
  params: {
    //opcional cas oo user cancele a operacao
    access_token: string;
    error?: string;
  };
};
const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const loadUserAsyncStorage = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);
    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
      setUser(userLogged);
    }
  };

  useEffect(() => {
    loadUserAsyncStorage();
  }, []);

  const singIn = async () => {
    try {
      setLoading(true);
      //Url criada dentro do discord auth,

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as DiscordAuthResponse;
      //Ve a resposta, e monta oq vc quer da resposta.
      //const response = ....
      //console.log(response)

      if (type === "success" && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get("/users/@me");
        //console.log(userInfo);

        const userData: User = {
          id: userInfo.data.id,
          username: userInfo.data.username,
          firstName: userInfo.data.username.split(" ")[0], //quebra o nome e traz o primeiro
          avatar: `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`,
          email: userInfo.data.email,
          token: params.access_token,
        };

        //Salvar como text
        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUser(userData);
      }
    } catch (error) {
      throw new Error(`Nao foi Possivel Autenticar `);
    } finally {
      setLoading(false);
    }
  };

  const singOut = async () => {
    //setUser({} as User);
    setUser(null);
    await AsyncStorage.removeItem(COLLECTION_USERS);
  };

  return (
    <AuthContext.Provider value={{ user, singIn, singOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
