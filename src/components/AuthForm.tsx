"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useAuth } from "@/lib/auth-context";

type Mode = "login" | "register";

export function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const { login, register } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "");
    const password = String(fd.get("password") ?? "");

    let err: string | null;
    if (mode === "login") {
      err = login(email, password);
    } else {
      const name = String(fd.get("name") ?? "");
      err = register(name, email, password);
    }

    setPending(false);
    if (err) {
      setError(err);
      return;
    }
    router.push("/courses");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {mode === "register" && (
        <div>
          <label htmlFor="name" className="werun-label">
            Имя
          </label>
          <input id="name" name="name" required className="werun-input" />
        </div>
      )}
      <div>
        <label htmlFor="email" className="werun-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="werun-input"
        />
      </div>
      <div>
        <label htmlFor="password" className="werun-label">
          Пароль
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          className="werun-input"
        />
      </div>

      {error && (
        <p className="werun-alert-error px-3 py-2 text-sm" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={pending} className="werun-btn-primary w-full">
        {mode === "login" ? "Войти" : "Зарегистрироваться"}
      </button>

      <p className="text-center text-sm werun-muted">
        {mode === "login" ? (
          <>
            Нет аккаунта?{" "}
            <Link href="/register" className="werun-link font-medium">
              Регистрация
            </Link>
          </>
        ) : (
          <>
            Уже есть аккаунт?{" "}
            <Link href="/login" className="werun-link font-medium">
              Войти
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
