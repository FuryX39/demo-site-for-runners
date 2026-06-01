"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteName } from "@/lib/data";
import { useAuth } from "@/lib/auth-context";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/news", label: "Новости" },
  { href: "/courses", label: "Курсы" },
  { href: "/groups", label: "Группы" },
  { href: "/contact", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const { user, logout, isLoading } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,255,213,0.12)] bg-[#0a0a12]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="werun-logo">WR</span>
          <span className="werun-brand">{siteName}</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1 text-sm font-medium">
          {nav.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-2 transition-all ${
                  active
                    ? "werun-nav-active"
                    : "werun-muted hover:text-[var(--text)] hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 text-sm">
          {!isLoading && (
            <>
              {user ? (
                <>
                  <span className="hidden werun-muted sm:inline">{user.name}</span>
                  <button type="button" onClick={logout} className="werun-btn-ghost py-2">
                    Выйти
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="werun-btn-ghost py-2">
                    Войти
                  </Link>
                  <Link href="/register" className="werun-btn-primary py-2">
                    Регистрация
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
