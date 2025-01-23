export type LoginType = {
  email: string;
  password: string;
};

export type LoginReturn = {
  token: string;
  expiresIn: number;
  type: string;
};
