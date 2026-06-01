import Link from "next/link";
import type { NewsPost } from "@/lib/types";
import { formatDateShort } from "@/lib/data";

export function NewsTeaser({
  posts,
  limit = 3,
}: {
  posts: NewsPost[];
  limit?: number;
}) {
  const items = posts.slice(0, limit);
  if (items.length === 0) return null;

  return (
    <aside className="werun-card overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-[rgba(0,255,213,0.12)] px-4 py-3 sm:px-5">
        <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--neon-cyan)]">
          Последние новости
        </h2>
        <Link href="/news" className="werun-link shrink-0 text-xs">
          Вся лента →
        </Link>
      </div>
      <ul>
        {items.map((post, index) => (
          <li
            key={post.id}
            className={
              index > 0 ? "border-t border-[rgba(0,255,213,0.08)]" : undefined
            }
          >
            <Link
              href={`/news#post-${post.id}`}
              className="group flex gap-3 px-4 py-3 transition-colors hover:bg-[rgba(0,255,213,0.04)] sm:px-5 sm:py-3.5"
            >
              <time
                dateTime={post.date}
                className="w-14 shrink-0 pt-0.5 text-xs werun-muted sm:w-16"
              >
                {formatDateShort(post.date)}
              </time>
              <span className="min-w-0 flex-1">
                <span className="line-clamp-1 text-sm font-medium text-[var(--text)] group-hover:text-[var(--neon-cyan)]">
                  {post.title}
                </span>
                <span className="mt-0.5 line-clamp-1 text-xs werun-muted">
                  {post.excerpt}
                </span>
              </span>
              <span className="werun-tag hidden shrink-0 self-center sm:inline">
                {post.tag}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
