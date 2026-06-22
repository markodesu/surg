import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { blogPosts, getBlogPost } from "../../../data/blog";
import { WHATSAPP_LINK_CONSULTATION } from "../../../lib/contacts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 hover:text-indigo-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Все статьи
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
          {post.categoryLabel}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {post.title}
        </h1>
        <time className="mt-4 block text-sm text-slate-500" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <div className="mt-8 space-y-5">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-base leading-8 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-[1.5rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-indigo-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">
            Нужна консультация нейрохирурга?
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Запишитесь на приём в Бишкеке — обсудим ваш случай и составим план
            лечения.
          </p>
          <a
            href={WHATSAPP_LINK_CONSULTATION}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Записаться в WhatsApp
          </a>
        </div>
      </article>
    </main>
  );
}
