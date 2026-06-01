import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { coachName, newsPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Новости",
  description: "Лента постов от тренера: планы, советы и анонсы тренировок.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--neon-magenta)]">
        // лента
      </p>
      <h1 className="mt-2 text-3xl font-bold werun-heading">Новости тренера</h1>
      <p className="mt-3 werun-muted">
        Публикации от {coachName}: планы на сезон, советы и анонсы совместных
        пробежек.
      </p>
      <div className="mt-10 space-y-8">
        {newsPosts.map((post) => (
          <div key={post.id} id={`post-${post.id}`}>
            <NewsCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
