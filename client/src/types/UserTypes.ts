export type UserType = {
  id?: number;
  name?: string;
  email?: string;
  status?: string;
};

export type SignUpUserType = {
  username: string;
  email: string;
  password: string;
};
export type LoginUserType = Omit<SignUpUserType, 'email'>;
