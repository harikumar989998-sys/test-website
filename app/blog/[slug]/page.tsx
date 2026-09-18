import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../lib/blog-data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
      return { title: "Post not found" };
    }

    return {
      title: `${post.title} | Northstar Blog`,
      description: post.excerpt,
    };
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "60px 24px 100px" }}>
      <Link href="/blog" style={{ color: "#5b3df5", fontWeight: 700, display: "inline-block", marginBottom: 22 }}>
        ← Back to blog
      </Link>

      <p style={{ color: "#5b3df5", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: 12, fontWeight: 700 }}>
        {post.category}
      </p>

      <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.06, letterSpacing: "-0.06em", marginTop: 12 }}>
        {post.title}
      </h1>

      <div style={{ display: "flex", gap: 18, flexWrap: "wrap", color: "#475467", marginTop: 18, fontSize: 15 }}>
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>

      <article style={{ marginTop: 30, display: "grid", gap: 18, color: "#1f2937", fontSize: "1.04rem", lineHeight: 1.9 }}>
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
