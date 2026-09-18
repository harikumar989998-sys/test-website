"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { posts } from "../lib/blog-data";
import styles from "./blog.module.css";

const categories = ["All", "Brand Strategy", "UX", "Growth"];

type SortOption = "latest" | "oldest" | "popular";

function Avatar({ initials }: { initials: string }) {
  return <span className={styles.avatar} aria-hidden="true">{initials}</span>;
}

export default function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortOption>("latest");
  const [dark, setDark] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const visiblePosts = useMemo(() => {
    const filtered = posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const searchText = `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(" ")}`.toLowerCase();
      return matchesCategory && searchText.includes(query.trim().toLowerCase());
    });

    return [...filtered].sort((a, b) => {
      if (sort === "popular") return a.popularRank - b.popularRank;
      return sort === "latest" ? posts.indexOf(a) - posts.indexOf(b) : posts.indexOf(b) - posts.indexOf(a);
    });
  }, [category, query, sort]);

  const featured = posts[0];

  function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <div className={`${styles.page} ${dark ? styles.dark : ""}`}>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <Link className={styles.brand} href="/" aria-label="Northstar home"><span className={styles.mark}>N</span> Northstar</Link>
          <nav className={styles.toplinks} aria-label="Blog navigation">
            <Link href="/">Studio</Link><Link href="/blog">Journal</Link><a href="#newsletter">Subscribe</a>
            <button className={styles.themeButton} type="button" onClick={() => setDark((value) => !value)} aria-label="Toggle color theme">{dark ? "☼" : "◐"}</button>
          </nav>
        </header>

        <main>
          <section className={styles.intro} aria-labelledby="blog-title">
            <span className={styles.eyebrow}>The Northstar journal</span>
            <h1 id="blog-title">Ideas for building what matters.</h1>
            <p>Practical thinking on brand, experience, and growth for teams moving with intent.</p>
          </section>

          <article className={styles.spotlight}>
            <Link className={styles.spotlightMedia} href={`/blog/${featured.slug}`} aria-label={`Read ${featured.title}`}><img src={featured.image} alt={featured.imageAlt} /></Link>
            <div className={styles.spotlightBody}>
              <span className={styles.eyebrow}>Spotlight · {featured.category}</span>
              <h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
              <p>{featured.excerpt}</p>
              <div className={styles.meta}><Avatar initials={featured.authorInitials} /><div className={styles.metaText}><span>{featured.author}</span><span>{featured.date}</span><span>{featured.readTime}</span></div></div>
            </div>
          </article>

          <section aria-label="Search and filter articles">
            <div className={styles.controls}>
              <label className={styles.search}><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles..." aria-label="Search articles" /></label>
              <label className={styles.sort}>Sort by <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)}><option value="latest">Latest first</option><option value="oldest">Oldest</option><option value="popular">Most popular</option></select></label>
            </div>
            <div className={styles.filters} role="tablist" aria-label="Filter by category">
              {categories.map((item) => <button key={item} className={`${styles.filter} ${category === item ? styles.filterActive : ""}`} type="button" onClick={() => setCategory(item)} role="tab" aria-selected={category === item}>{item}</button>)}
            </div>
          </section>

          <section className={styles.grid} aria-live="polite" aria-label="Articles">
            {visiblePosts.length ? visiblePosts.map((post) => <article className={styles.card} key={post.slug}>
              <Link className={styles.cardImage} href={`/blog/${post.slug}`}><img src={post.image} alt={post.imageAlt} /></Link>
              <div className={styles.cardBody}><span className={styles.cardCategory}>{post.category}</span><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><div className={styles.meta}><Avatar initials={post.authorInitials} /><div className={styles.metaText}><span>{post.author}</span><span>{post.date}</span><span>{post.readTime}</span></div></div></div>
            </article>) : <div className={styles.empty}><strong>No articles found</strong>Try a different keyword or reset the category filter.</div>}
          </section>

          <button className={styles.loadMore} type="button">Load more articles</button>

          <section className={styles.newsletter} id="newsletter">
            <div><span className={styles.eyebrow}>A note worth opening</span><h2>Good ideas, sent occasionally.</h2><p>No noise. Just useful thinking for your next move.</p></div>
            <form className={styles.subscribe} onSubmit={submitNewsletter}><input type="email" required placeholder="you@company.com" aria-label="Email address" /> <button type="submit">{subscribed ? "You're in" : "Subscribe"}</button></form>
          </section>
        </main>
      </div>
    </div>
  );
}
