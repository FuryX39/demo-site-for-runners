import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseLessons } from "./CourseLessons";
import { courseTypeLabel, courses, formatPrice } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) return { title: "Курс не найден" };
  return { title: course.title, description: course.description };
}

export default async function CoursePage({ params }: Props) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) notFound();

  const badgeClass =
    course.type === "free"
      ? "werun-badge-free"
      : course.type === "group"
        ? "werun-badge-group"
        : "werun-badge-individual";

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/courses" className="werun-link text-sm font-medium">
        ← Все курсы
      </Link>

      <div className="mt-6">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}>
          {courseTypeLabel(course.type)}
        </span>
        <h1 className="mt-3 text-3xl font-bold werun-heading">{course.title}</h1>
        <p className="mt-4 werun-muted">{course.description}</p>
        <ul className="mt-4 flex flex-wrap gap-4 text-sm werun-muted">
          <li className="text-[var(--neon-cyan)]">{formatPrice(course.price)}</li>
          <li>{course.duration}</li>
          <li>Уровень: {course.level}</li>
        </ul>
      </div>

      <CourseLessons course={course} />
    </div>
  );
}
