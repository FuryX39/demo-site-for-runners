import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { NewsTeaser } from "@/components/NewsTeaser";
import { courses, heroTagline, newsPosts, siteName } from "@/lib/data";

const sections = [
  {
    title: "Курсы и программы",
    description:
      "Бесплатные материалы для старта и платные групповые и индивидуальные планы с тренером.",
    href: "/courses",
    cta: "Смотреть курсы",
  },
  {
    title: "Новости тренера",
    description:
      "Планы на сезон, советы по технике и анонсы совместных тренировок.",
    href: "/news",
    cta: "Читать ленту",
  },
  {
    title: "Беговые группы",
    description:
      "Найдите единомышленников по темпу и расписанию — бегайте не в одиночку.",
    href: "/groups",
    cta: "Найти группу",
  },
  {
    title: "Контакты",
    description:
      "Запишитесь на индивидуальную консультацию или задайте вопрос тренеру.",
    href: "/contact",
    cta: "Связаться",
  },
];

export default function HomePage() {
  const freeCourses = courses.filter((c) => c.type === "free");

  return (
    <>
      <section className="werun-hero">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--neon-cyan)]">
            // для любителей бега
          </p>
          <h1 className="mt-4 max-w-3xl">
            <span className="werun-brand-hero">{siteName}</span>
            <span className="mt-4 block text-2xl font-semibold leading-snug text-[var(--text)] sm:text-3xl md:text-4xl">
              {heroTagline}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg werun-muted">
            Программы, бесплатные и платные курсы, лента новостей и беговые
            группы. Всё в одном месте — без лишней сложности.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="werun-btn-primary px-5 py-3">
              Начать бесплатно
            </Link>
            <Link href="/courses" className="werun-btn-ghost px-5 py-3">
              Все курсы
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold werun-heading">Зачем этот сайт</h2>
        <p className="mt-3 max-w-3xl werun-muted">
          Если вы бегаете для здоровья или готовитесь к старту — здесь есть
          структура: от первых километров до полумарафона. Бесплатные уроки
          доступны после регистрации. Платные программы — с обратной связью
          тренера. В разделе групп — компания для регулярных пробежек.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-start">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {sections.map((s) => (
              <div key={s.href} className="werun-card p-6">
                <h3 className="text-lg font-semibold werun-heading">{s.title}</h3>
                <p className="mt-2 text-sm werun-muted">{s.description}</p>
                <Link
                  href={s.href}
                  className="werun-link mt-4 inline-block text-sm font-medium"
                >
                  {s.cta} →
                </Link>
              </div>
            ))}
          </div>
          <NewsTeaser posts={newsPosts} />
        </div>
      </section>

      <section className="werun-section-alt py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold werun-heading">Бесплатные курсы</h2>
            <Link href="/courses" className="werun-link text-sm font-medium">
              Все курсы →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {freeCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
          <p className="mt-6 text-sm werun-muted">
            Для просмотра уроков нужна{" "}
            <Link href="/login" className="werun-link font-medium">
              авторизация
            </Link>
            .
          </p>
        </div>
      </section>

    </>
  );
}
