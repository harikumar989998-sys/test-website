"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { BlogPost } from "../../lib/blog-data";
import styles from "./article.module.css";

const sections = ["The clarity advantage", "Build the narrative", "Make the story visible"];

function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  async function copyLink() {
    await navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return <div className={styles.shareBar} aria-label="Share this article"><span>Share</span><a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`} target="_blank" rel="noreferrer" aria-label="Share on X">𝕏</a><a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noreferrer" aria-label="Share on LinkedIn">in</a><a href="https://wa.me/?text=" target="_blank" rel="noreferrer" aria-label="Share on WhatsApp">◉</a><button type="button" onClick={copyLink} aria-label="Copy article link">{copied ? "✓" : "↗"}</button>{copied && <small role="status">Link copied</small>}</div>;
}

function AuthorBadge({ post, large = false }: { post: BlogPost; large?: boolean }) {
  return <div className={`${styles.authorBadge} ${large ? styles.authorLarge : ""}`}><span className={styles.authorAvatar}>{post.authorInitials}</span><div><strong>{post.author}</strong><span>{post.authorRole}</span></div></div>;
}

export default function ArticleReader({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const onScroll = () => {
      const visible = sections.find((section) => {
        const element = document.getElementById(section.toLowerCase().replaceAll(" ", "-"));
        return element && element.getBoundingClientRect().top < 180;
      });
      if (visible) setActiveSection(visible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className={styles.page}><div className={styles.shell}>
    <header className={styles.articleHeader}>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span>{post.category}</span></nav>
      <div className={styles.headerKicker}><span className={styles.category}>{post.category}</span><time dateTime="2026-09-18">{post.date}</time>{post.updatedDate && <span>Updated {post.updatedDate}</span>}</div>
      <h1>{post.title}</h1><p className={styles.lede}>{post.excerpt}</p>
      <div className={styles.headerBottom}><AuthorBadge post={post} /><span className={styles.readTime}>{post.readTime}</span><ShareBar title={post.title} /></div>
    </header>

    <figure className={styles.heroImage}><img src={post.image} alt={post.imageAlt} /><figcaption>Thoughtful work starts with making space for the right question.</figcaption></figure>

    <div className={styles.readingLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.toc}><span className={styles.tocLabel}>In this article</span><nav aria-label="Table of contents">{sections.map((section) => <a className={activeSection === section ? styles.tocActive : ""} key={section} href={`#${section.toLowerCase().replaceAll(" ", "-")}`}>{section}</a>)}</nav></div>
        <div className={styles.sideAuthor}><AuthorBadge post={post} /><p>{post.authorBio}</p><div className={styles.socialLinks}><a href="#author">LinkedIn</a><a href="#author">Website</a></div></div>
      </aside>

      <article className={styles.content}>
        <p className={styles.introParagraph}>{post.content[0]}</p>
        <h2 id="the-clarity-advantage">The clarity advantage</h2><p>{post.content[1]}</p>
        <blockquote>“The strongest brands do not shout louder. They create a simpler narrative that removes friction from the decision.”</blockquote>
        <h2 id="build-the-narrative">Build the narrative</h2><p>{post.content[2]}</p>
        <div className={styles.callout}><strong>A useful filter</strong><p>Can a new visitor explain what you do, who it is for, and why it matters after one quick scan? If not, keep simplifying.</p></div>
        <h3 id="make-the-story-visible">Make the story visible</h3><p>{post.content[3]}</p>
        <figure className={styles.inlineFigure}><div className={styles.figureGraphic}><span>01</span><span>Clarity</span><span>02</span><span>Confidence</span><span>03</span><span>Action</span></div><figcaption>When every touchpoint reinforces the same story, the path to action feels natural.</figcaption></figure>
        <pre><code>{`const story = {\n  problem: "What is hard today?",\n  promise: "What changes after us?",\n  proof: "Why should they believe it?"\n};`}</code><button type="button" onClick={() => navigator.clipboard?.writeText("const story = { problem, promise, proof };")}>Copy</button></pre>
        <p>That is where strong landing pages outperform crowded pages: they make your value impossible to ignore. Good design is not decoration around a message. It is the system that lets the message land.</p>
      </article>
    </div>

    <footer className={styles.articleFooter}><div className={styles.tags}>{post.tags.map((tag) => <span key={tag}>#{tag.replaceAll(" ", "")}</span>)}</div><ShareBar title={post.title} /><div className={styles.authorBio} id="author"><AuthorBadge post={post} large /><p>{post.authorBio} We work with teams that want their next chapter to feel as considered as their first impression.</p><div className={styles.socialLinks}><a href="#author">LinkedIn</a><a href="#author">Instagram</a><a href="mailto:hello@northstarstudio.com">Email</a></div></div><div className={styles.nextPrev}><Link href="/blog/content-system-for-startups"><span>← Previous article</span><strong>A simple content system for startup teams</strong></Link><Link href="/blog/landing-page-ux-checklist"><span>Next article →</span><strong>The landing page UX checklist that improves conversion</strong></Link></div></footer>

    <section className={styles.related} aria-labelledby="related-title"><div className={styles.relatedHeading}><span className={styles.eyebrow}>Keep reading</span><h2 id="related-title">More from the journal</h2></div><div className={styles.relatedGrid}>{related.map((item) => <Link className={styles.relatedCard} key={item.slug} href={`/blog/${item.slug}`}><img src={item.image} alt="" /><span>{item.category}</span><h3>{item.title}</h3></Link>)}</div></section>
  </div></div>;
}
