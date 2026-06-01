"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { User } from "./types";

const STORAGE_KEY = "werun_user";
const DEMO_EMAIL = "demo@werun.app";
const DEMO_PASSWORD = "demo123";

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => string | null;
  register: (name: string, email: string, password: string) => string | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function loadUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(loadUser());
    setIsLoading(false);
  }, []);

  const persist = useCallback((next: User | null) => {
    if (next) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    setUser(next);
  }, []);

  const login = useCallback(
    (email: string, password: string): string | null => {
      const normalized = email.trim().toLowerCase();
      if (normalized === DEMO_EMAIL && password === DEMO_PASSWORD) {
        persist({
          id: "demo",
          name: "Демо Бегун",
          email: DEMO_EMAIL,
        });
        return null;
      }
      const stored = localStorage.getItem(`user_${normalized}`);
      if (!stored) return "Пользователь не найден. Зарегистрируйтесь или используйте демо-аккаунт.";
      const { user: saved, password: hash } = JSON.parse(stored) as {
        user: User;
        password: string;
      };
      if (hash !== password) return "Неверный пароль.";
      persist(saved);
      return null;
    },
    [persist]
  );

  const register = useCallback(
    (name: string, email: string, password: string): string | null => {
      if (password.length < 6) return "Пароль должен быть не короче 6 символов.";
      const normalized = email.trim().toLowerCase();
      if (localStorage.getItem(`user_${normalized}`)) {
        return "Этот email уже зарегистрирован.";
      }
      const newUser: User = {
        id: crypto.randomUUID(),
        name: name.trim(),
        email: normalized,
      };
      localStorage.setItem(
        `user_${normalized}`,
        JSON.stringify({ user: newUser, password })
      );
      persist(newUser);
      return null;
    },
    [persist]
  );

  const logout = useCallback(() => persist(null), [persist]);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
