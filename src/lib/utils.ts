import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// src/lib/utils.ts

export async function loginUser(email: string, password: string): Promise<boolean> {
  // Simulated login: replace with real API call later
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  });
}
