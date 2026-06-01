import Link from "next/link";
import type { Course } from "@/lib/types";
import { courseTypeLabel, formatPrice } from "@/lib/data";

const typeStyles: Record<Course["type"], string> = {
  free: "werun-badge-free",
  group: "werun-badge-group",
  individual: "werun-badge-individual",
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="werun-card flex flex-col p-6">
      <div className="flex items-start justify-between gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeStyles[course.type]}`}
        >
          {courseTypeLabel(course.type)}
        </span>
        <span className="text-sm font-semibold text-[var(--neon-cyan)]">
          {formatPrice(course.price)}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold werun-heading">{course.title}</h3>
      <p className="mt-2 flex-1 text-sm werun-muted">{course.description}</p>
      <p className="mt-3 text-xs werun-muted">
        {course.duration} · {course.level} · {course.lessons.length} уроков
      </p>
      <Link href={`/courses/${course.id}`} className="werun-btn-primary mt-4">
        Подробнее
      </Link>
    </article>
  );
}
