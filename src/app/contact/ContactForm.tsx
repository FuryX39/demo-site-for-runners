"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="werun-alert-success mt-6 px-4 py-3 text-sm">
        Сообщение отправлено (демо). В рабочей версии письмо придёт тренеру.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="name" className="werun-label">
          Имя
        </label>
        <input id="name" name="name" required className="werun-input" />
      </div>
      <div>
        <label htmlFor="email" className="werun-label">
          Email
        </label>
        <input id="email" name="email" type="email" required className="werun-input" />
      </div>
      <div>
        <label htmlFor="topic" className="werun-label">
          Тема
        </label>
        <select id="topic" name="topic" className="werun-input">
          <option>Индивидуальная программа</option>
          <option>Групповой курс</option>
          <option>Беговая группа</option>
          <option>Другой вопрос</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="werun-label">
          Сообщение
        </label>
        <textarea id="message" name="message" rows={4} required className="werun-input" />
      </div>
      <button type="submit" className="werun-btn-primary w-full">
        Отправить
      </button>
    </form>
  );
}
