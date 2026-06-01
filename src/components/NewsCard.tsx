import Link from "next/link";
import type { NewsPost } from "@/lib/types";
import { formatDate } from "@/lib/data";

export function NewsCard({ post, compact }: { post: NewsPost; compact?: boolean }) {
  return (
    <article className="werun-card p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs werun-muted">
        <span className="werun-tag">{post.tag}</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <h3 className="mt-2 text-lg font-semibold werun-heading">{post.title}</h3>
      <p className="mt-2 text-sm werun-muted">
        {compact ? post.excerpt : post.content}
      </p>
      {compact && (
        <Link href={`/news#post-${post.id}`} className="werun-link mt-3 inline-block text-sm font-medium">
          Читать далее →
        </Link>
      )}
    </article>
  );
}
