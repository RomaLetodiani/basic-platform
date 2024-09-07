import { User } from ".";
import React from "react";

export interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
