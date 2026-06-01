"use client";

import Link from "next/link";
import type { Course } from "@/lib/types";
import { useAuth } from "@/lib/auth-context";

export function CourseLessons({ course }: { course: Course }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <p className="mt-10 text-sm werun-muted">Загрузка...</p>;
  }

  if (!user) {
    return (
      <div className="werun-alert-warn mt-10">
        <h2 className="font-semibold text-[var(--neon-magenta)]">
          Войдите, чтобы смотреть уроки
        </h2>
        <p className="mt-2 text-sm werun-muted">
          Курсы доступны зарегистрированным пользователям. Это демо-версия
          авторизации — данные хранятся только в вашем браузере.
        </p>
        <div className="mt-4 flex gap-3">
          <Link href="/login" className="werun-btn-primary">
            Войти
          </Link>
          <Link href="/register" className="werun-btn-ghost">
            Регистрация
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold werun-heading">Уроки курса</h2>
      <p className="mt-1 text-sm werun-muted">
        Вы вошли как {user.name}. В полной версии здесь будут видео и прогресс.
      </p>
      <ol className="mt-6 space-y-3">
        {course.lessons.map((lesson, i) => (
          <li
            key={lesson.id}
            className="flex items-center gap-4 rounded-xl border border-[rgba(0,255,213,0.15)] bg-[var(--bg-card)] px-4 py-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,255,213,0.12)] text-sm font-semibold text-[var(--neon-cyan)]">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="font-medium werun-heading">{lesson.title}</p>
              <p className="text-xs werun-muted">{lesson.duration}</p>
            </div>
            <span className="rounded-lg border border-[rgba(139,92,246,0.3)] bg-[rgba(139,92,246,0.1)] px-3 py-1 text-xs text-[#c4b5fd]">
              Демо
            </span>
          </li>
        ))}
      </ol>
      {course.type !== "free" && (
        <p className="mt-6 text-sm werun-muted">
          Для записи на платный курс напишите тренеру в разделе{" "}
          <Link href="/contact" className="werun-link font-medium">
            Контакты
          </Link>
          .
        </p>
      )}
    </section>
  );
}
