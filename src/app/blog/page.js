import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { blogPosts } from "../../data/blog";

export const metadata = {
  title: "Блог | Направления лечения — нейрохирург Бишкек",
  description:
    "Статьи о лечении позвоночника, головного мозга и периферической нервной системы. Нейрохирург в Кыргызстане.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
          Блог
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Направления лечения
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Подробные материалы о заболеваниях позвоночника, головного мозга и
          периферической нервной системы.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                {post.categoryLabel}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-sky-700"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <time className="text-xs text-slate-500" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-indigo-700"
                >
                  Читать
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
