export interface User {
  email: string;
  password: string;
}

export interface Error {
  code: number;
  message: string;
}

export interface AuthResponse {
  accessToken: string;
}
