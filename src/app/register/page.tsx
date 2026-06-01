import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Регистрация",
};

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--neon-magenta)]">
        // join
      </p>
      <h1 className="mt-2 text-2xl font-bold werun-heading">Регистрация</h1>
      <p className="mt-2 text-sm werun-muted">
        Создайте аккаунт для доступа к курсам. В демо данные хранятся только в
        браузере.
      </p>
      <div className="werun-card mt-8 p-6">
        <AuthForm mode="register" />
      </div>
    </div>
  );
}
