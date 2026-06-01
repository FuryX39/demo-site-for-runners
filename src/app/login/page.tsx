import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Вход",
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
        // auth
      </p>
      <h1 className="mt-2 text-2xl font-bold werun-heading">Вход</h1>
      <p className="mt-2 text-sm werun-muted">
        Войдите, чтобы смотреть уроки курсов и вступать в беговые группы.
      </p>
      <div className="werun-card mt-8 p-6">
        <AuthForm mode="login" />
      </div>
      <p className="mt-4 text-center text-xs werun-muted">
        Демо-аккаунт: demo@werun.app / demo123
      </p>
    </div>
  );
}
