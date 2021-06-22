export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

export type AppointmentExpoProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};
