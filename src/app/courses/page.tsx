import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Курсы",
  description: "Бесплатные, групповые и индивидуальные программы для бегунов.",
};

export default function CoursesPage() {
  const free = courses.filter((c) => c.type === "free");
  const paid = courses.filter((c) => c.type !== "free");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
        // программы
      </p>
      <h1 className="mt-2 text-3xl font-bold werun-heading">Курсы и программы</h1>
      <p className="mt-3 max-w-2xl werun-muted">
        Бесплатные материалы — для самостоятельного старта. Платные — с участием
        тренера: групповые циклы и персональные планы. Чтобы открыть уроки,
        войдите в аккаунт.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold werun-heading">Бесплатно</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {free.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold werun-heading">Платные — с тренером</h2>
        <p className="mt-2 text-sm werun-muted">
          Групповые — общий план и встречи. Индивидуальные — под ваши цели и
          график.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {paid.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>

      <p className="werun-hint-box mt-10">
        Нет аккаунта?{" "}
        <Link href="/register" className="werun-link font-semibold underline">
          Зарегистрируйтесь
        </Link>{" "}
        — это займёт минуту. Демо: <code>demo@werun.app</code> /{" "}
        <code>demo123</code>
      </p>
    </div>
  );
}
