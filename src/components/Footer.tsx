import Link from "next/link";
import { contactInfo, heroTagline, siteName } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-[rgba(0,255,213,0.12)] bg-[#050508]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="werun-brand text-base">{siteName}</p>
          <p className="mt-2 text-sm werun-muted">
            {heroTagline}. Бег не в одиночку — вместе к цели.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[var(--text)]">Разделы</p>
          <ul className="mt-2 space-y-1 text-sm werun-muted">
            <li>
              <Link href="/courses" className="werun-link">
                Курсы и программы
              </Link>
            </li>
            <li>
              <Link href="/news" className="werun-link">
                Новости тренера
              </Link>
            </li>
            <li>
              <Link href="/groups" className="werun-link">
                Беговые группы
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[var(--text)]">Связь</p>
          <p className="mt-2 text-sm werun-muted">{contactInfo.email}</p>
          <p className="text-sm werun-muted">{contactInfo.phone}</p>
        </div>
      </div>
      <div className="border-t border-[rgba(0,255,213,0.08)] py-4 text-center text-xs werun-muted">
        © {new Date().getFullYear()} {siteName}. Демо для любителей бега.
      </div>
    </footer>
  );
}
