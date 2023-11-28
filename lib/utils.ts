import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimHost(email: string) {
  let username = "";
  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") return username;
    username = username + email[i];
  }
  return username;
}
