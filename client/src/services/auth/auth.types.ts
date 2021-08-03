export type AuthResponse = {
  token: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type RegisterRequest = LoginRequest & {
  firstname: string;
  lastname: string;
};
