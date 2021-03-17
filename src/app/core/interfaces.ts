export interface User {
  email: string;
  password: string;
  // agree: boolean;
}

export interface UserRegister {
  email: string;
  password: string;
  agree: boolean;
}

export interface Error {
  code: number;
  message: string;
}

export interface AuthResponse {
  accessToken: string;
}
