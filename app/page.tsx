import styles from "./page.module.css";

const features = [
  {
    title: "High-converting websites",
    text: "Beautiful, fast, and conversion-focused experiences built for growth-minded brands.",
  },
  {
    title: "Smart marketing systems",
    text: "From funnel design to messaging strategy, every part of your customer journey is aligned.",
  },
  {
    title: "Actionable content engine",
    text: "Turn insights into blog posts, case studies, and campaigns that attract and convert leads.",
  },
];

const posts = [
  {
    category: "Brand Strategy",
    title: "How to build a brand people remember in 90 days",
    text: "A clear framework for creating a consistent positioning story that converts interest into trust.",
    readTime: "5 min read",
  },
  {
    category: "Growth",
    title: "The content playbook for startup teams with limited time",
    text: "Practical ways to create useful content without burning out your marketing team.",
    readTime: "7 min read",
  },
  {
    category: "Design",
    title: "Why clean landing pages outperform crowded pages every time",
    text: "Simple web experiences improve clarity, trust, and conversions across every funnel stage.",
    readTime: "4 min read",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logoWrap}>
          <span className={styles.logoMark}>N</span>
          <span>Northstar</span>
        </div>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className={styles.navButton} href="#contact">
          Book a call
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>Built for ambitious brands</span>
            <h1>Launch ideas that turn attention into action.</h1>
            <p>
              We help founders and teams design magnetic websites, sharper messaging,
              and growth systems that make every click count.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#contact">
                Start your project
              </a>
              <a className={styles.secondaryButton} href="#blog">
                Explore insights
              </a>
            </div>

            <div className={styles.metrics}>
              <div>
                <strong>120+</strong>
                <span>brands launched</span>
              </div>
              <div>
                <strong>3.4x</strong>
                <span>average uplift</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>client rating</span>
              </div>
            </div>
          </div>

          <div className={styles.heroCard} aria-label="Dashboard preview">
            <div className={styles.cardHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardPanel}>
                <span>Revenue growth</span>
                <strong>+64%</strong>
                <small>Last 90 days</small>
              </div>

              <div className={styles.chart}>
                <span className={styles.barOne} />
                <span className={styles.barTwo} />
                <span className={styles.barThree} />
                <span className={styles.barFour} />
                <span className={styles.barFive} />
              </div>

              <div className={styles.inlineStats}>
                <div>
                  <label>Leads</label>
                  <strong>1.8k</strong>
                </div>
                <div>
                  <label>CTR</label>
                  <strong>8.7%</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection} id="features">
          <div className={styles.sectionHeading}>
            <span>Why teams choose us</span>
            <h2>Strategy and design that work together.</h2>
          </div>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>✦</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.aboutSection} id="about">
          <div className={styles.aboutText}>
            <span className={styles.eyebrow}>A better growth partner</span>
            <h2>We make your message feel clear, premium, and persuasive.</h2>
            <p>
              Whether you need a fresh home page, a more compelling offer, or a content
              strategy that drives leads, we turn complexity into clarity without losing your
              unique voice.
            </p>
          </div>

          <div className={styles.pointsList}>
            <div>
              <strong>01</strong>
              <span>Clear positioning from day one</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Design systems that feel premium</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Content direction built for growth</span>
            </div>
          </div>
        </section>

        <section className={styles.blogSection} id="blog">
          <div className={styles.sectionHeading}>
            <span>Latest insights</span>
            <h2>Fresh ideas from our blog.</h2>
          </div>

          <div className={styles.blogGrid}>
            {posts.map((post) => (
              <article key={post.title} className={styles.blogCard}>
                <span className={styles.blogTag}>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <div className={styles.blogMeta}>
                  <span>{post.readTime}</span>
                  <a href="#contact">Read more</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer} id="contact">
        <div>
          <span className={styles.eyebrow}>Let’s build your next win</span>
          <h2>Ready to turn your idea into a standout brand?</h2>
        </div>

        <a className={styles.primaryButton} href="mailto:hello@northstarstudio.com">
          hello@northstarstudio.com
        </a>
      </footer>
    </div>
  );
}
