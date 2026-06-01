"use client";

import { FormEvent, useState } from "react";
import type { RunningGroup } from "@/lib/types";
import { useAuth } from "@/lib/auth-context";

export function GroupsSection({ groups }: { groups: RunningGroup[] }) {
  const { user } = useAuth();
  const [joined, setJoined] = useState<string | null>(null);
  const [formSent, setFormSent] = useState(false);

  function handleJoin(groupId: string) {
    if (!user) {
      setJoined("auth");
      return;
    }
    setJoined(groupId);
  }

  function handleCreateRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSent(true);
  }

  return (
    <>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {groups.map((g) => {
          const spotsLeft = g.maxMembers - g.members;
          const isJoined = joined === g.id;
          return (
            <article key={g.id} className="werun-card flex flex-col p-6">
              <h2 className="text-lg font-semibold werun-heading">{g.name}</h2>
              <p className="mt-1 text-sm text-[var(--neon-cyan)]">{g.city}</p>
              <dl className="mt-4 space-y-2 text-sm werun-muted">
                <div>
                  <dt className="font-medium text-[var(--text)]">Когда</dt>
                  <dd>{g.schedule}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--text)]">Темп</dt>
                  <dd>{g.pace}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--text)]">Участники</dt>
                  <dd>
                    {g.members} / {g.maxMembers}
                    {spotsLeft > 0 && (
                      <span className="text-[var(--neon-cyan)]"> · {spotsLeft} мест</span>
                    )}
                  </dd>
                </div>
              </dl>
              <p className="mt-3 flex-1 text-sm werun-muted">{g.description}</p>
              {isJoined ? (
                <p className="werun-alert-success mt-4 px-3 py-2 text-sm">
                  Заявка отправлена (демо). Тренер свяжется с вами.
                </p>
              ) : (
                <button
                  type="button"
                  onClick={() => handleJoin(g.id)}
                  disabled={spotsLeft === 0}
                  className="werun-btn-primary mt-4 disabled:opacity-40"
                >
                  {spotsLeft === 0 ? "Мест нет" : "Присоединиться"}
                </button>
              )}
            </article>
          );
        })}
      </div>

      {joined === "auth" && (
        <p className="werun-alert-warn mt-6 text-sm">
          Чтобы вступить в группу,{" "}
          <a href="/login" className="werun-link font-semibold">
            войдите
          </a>{" "}
          или{" "}
          <a href="/register" className="werun-link font-semibold">
            зарегистрируйтесь
          </a>
          .
        </p>
      )}

      <section className="werun-card mt-16 p-8">
        <h2 className="text-xl font-semibold werun-heading">
          Не нашли подходящую группу?
        </h2>
        <p className="mt-2 text-sm werun-muted">
          Опишите город, желаемый темп и удобные дни — тренер соберёт группу
          единомышленников или подскажет существующую.
        </p>
        {formSent ? (
          <p className="werun-alert-success mt-6 text-sm font-medium">
            Спасибо! Заявка принята (демо). В реальном проекте она уйдёт тренеру
            на почту.
          </p>
        ) : (
          <form onSubmit={handleCreateRequest} className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="city" className="werun-label">
                Город / район
              </label>
              <input id="city" name="city" required className="werun-input" />
            </div>
            <div>
              <label htmlFor="pace" className="werun-label">
                Ваш темп (примерно)
              </label>
              <input
                id="pace"
                name="pace"
                placeholder="6:30 / км"
                className="werun-input"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="werun-label">
                Комментарий
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="werun-input"
                placeholder="Удобные дни, цель (5К, 10К, просто бегать)..."
              />
            </div>
            <button type="submit" className="werun-btn-primary sm:col-span-2">
              Отправить заявку
            </button>
          </form>
        )}
      </section>
    </>
  );
}
