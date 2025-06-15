export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserCreateResponse {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface AuthResponse {
  token: {
    id: string;
    name: string;
    email: string;
    token: string;
  };
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  passwordHash: string;
}