import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "../../lib/blog-data";
import ArticleReader from "./article-reader";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return post ? { title: `${post.title} | Northstar Journal`, description: post.excerpt } : { title: "Post not found" };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  return <ArticleReader post={post} related={related} />;
}
