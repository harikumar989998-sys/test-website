import Link from "next/link";
import { posts } from "../lib/blog-data";

export const metadata = {
  title: "Blog & Articles | Insights",
  description: "Explore the latest articles, technology guides, and updates.",
};

export default function BlogPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 100px" }}>
      <div style={{ marginBottom: 32 }}>
        <p style={{ color: "#5b3df5", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: 12, fontWeight: 700 }}>
          Insights
        </p>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.06em", marginTop: 12 }}>
          Fresh thinking for growth-focused teams.
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        {posts.map((post) => (
          <article
            key={post.slug}
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(16,24,40,0.08)",
              borderRadius: 24,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "fit-content",
                padding: "0.45rem 0.7rem",
                borderRadius: 999,
                background: "rgba(59, 130, 246, 0.1)",
                color: "#1d4ed8",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {post.category}
            </span>

            <div>
              <h2 style={{ fontSize: "1.5rem", lineHeight: 1.35, marginBottom: 10 }}>{post.title}</h2>
              <p style={{ color: "#475467", lineHeight: 1.8 }}>{post.excerpt}</p>
            </div>

            <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#344054", fontSize: 14 }}>
              <span>{post.readTime}</span>
              <Link href={`/blog/${post.slug}`} style={{ color: "#111827", fontWeight: 700 }}>
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
