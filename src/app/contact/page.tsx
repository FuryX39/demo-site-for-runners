import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { coachName, contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связь с тренером: запись на программы и вопросы по тренировкам.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
        // connect
      </p>
      <h1 className="mt-2 text-3xl font-bold werun-heading">Контакты</h1>
      <p className="mt-3 werun-muted">
        Свяжитесь с {coachName} по вопросам индивидуальных и групповых программ.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="werun-card p-8">
          <h2 className="text-lg font-semibold werun-heading">Как связаться</h2>
          <ul className="mt-6 space-y-4 text-sm werun-muted">
            <li>
              <span className="block font-medium text-[var(--text)]">Email</span>
              <a href={`mailto:${contactInfo.email}`} className="werun-link">
                {contactInfo.email}
              </a>
            </li>
            <li>
              <span className="block font-medium text-[var(--text)]">Телефон</span>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="werun-link"
              >
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <span className="block font-medium text-[var(--text)]">Telegram</span>
              {contactInfo.telegram}
            </li>
            <li>
              <span className="block font-medium text-[var(--text)]">Где тренируемся</span>
              {contactInfo.address}
            </li>
            <li>
              <span className="block font-medium text-[var(--text)]">Часы ответа</span>
              {contactInfo.hours}
            </li>
          </ul>
        </div>

        <div className="werun-card p-8">
          <h2 className="text-lg font-semibold werun-heading">Написать тренеру</h2>
          <p className="mt-2 text-sm werun-muted">
            Форма для демо — сообщение не отправляется на сервер.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
