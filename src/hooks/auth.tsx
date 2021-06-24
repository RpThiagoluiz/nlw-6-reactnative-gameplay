import React, { createContext, useContext, useState } from "react";
import * as AuthSession from "expo-auth-session"
import {SCOPE, CLIENT_ID, CDN_IMAGE, REDIRECT_URI, RESPONSE_TYPE} from "../configs"
import { api } from "../services/api";

interface User {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  loading:boolean;
  singIn: () => Promise<void>
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type DiscordAuthResponse = AuthSession.AuthSessionResult & {
  params : {
    access_token: string
  }
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading,setLoading] = useState(false)

  const singIn = async () => {

    try {
      setLoading(true)
      //Url criada dentro do discord auth,


      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`


      const {type, params} = await AuthSession.startAsync({authUrl}) as DiscordAuthResponse
      //Ve a resposta, e monta oq vc quer da resposta.
      //const response = ....
      //console.log(response)

      if(type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me')
        console.log(userInfo)


        const userData = {
          id: userInfo.data.id,
          username: userInfo.data.username,
          firstName: userInfo.data.username.split(' ')[0], //quebra o nome e traz o primeiro
          avatar: `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`,
          email: userInfo.data.email,
          token: params.access_token,
        }

        setUser(userData)
        setLoading(false)
      } else {
        setLoading(false)
        throw new Error()
      }

    } catch (error) {
        setLoading(false)
        throw new Error(error)

    }
  }

  return (
    <AuthContext.Provider value={{ user, singIn, loading }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
