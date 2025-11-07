import Link from 'next/link'
import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>About High Rockies Web Design</h1>
          <p>Building bold, modern websites that help High Rockies businesses thrive online</p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <h2>Our Story</h2>
              <p>
                We started High Rockies Web Design with a simple belief: building a website shouldn't be expensive or complicated.
              </p>
              <p>
                Too many local businesses in High Rockies were paying thousands upfront for websites (often just bloated templates), then getting hit with endless change requests and support charges. It didn't have to be that way.
              </p>
              <p>
                We created a different model. A free custom website. Built with modern code, not templates. Flat-rate management. Real support. Simple.
              </p>
              <p>
                Now, dozens of High Rockies businesses have beautiful, custom-built, modern websites they own completely—while we handle all the technical stuff for $59/month. No templates. No bloat. Just fast, SEO-optimized sites that actually work. Everyone wins.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.imagePlaceholder}>🏔️</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <h2>What We Believe In</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3>Transparency</h3>
              <p>No hidden fees. No surprise charges. Just honest, straightforward pricing and service.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Partnership</h3>
              <p>We succeed when you succeed. We're invested in your growth and long-term success.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h3>Excellence</h3>
              <p>Every website we build is bold, modern, and built to perform. No shortcuts, no templates.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🛠️</div>
              <h3>Reliability</h3>
              <p>We're here when you need us. Real people, real support, real solutions.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌍</div>
              <h3>Local First</h3>
              <p>High Rockies is our home. We understand your market and your community.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>👨‍💼</div>
              <h3>Your Ownership</h3>
              <p>Your website is 100% yours. You own it, always. No lock-in, no dependencies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="container">
          <h2>Our Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>1</div>
              <h3>Discovery</h3>
              <p>We learn about your business, your goals, your customers, and your vision.</p>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.processStep}>
              <div className={styles.stepCircle}>2</div>
              <h3>Design</h3>
              <p>We create a bold, modern website design tailored specifically to your business.</p>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.processStep}>
              <div className={styles.stepCircle}>3</div>
              <h3>Refine</h3>
              <p>Your feedback. Our revisions. Until it's perfect.</p>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.processStep}>
              <div className={styles.stepCircle}>4</div>
              <h3>Launch</h3>
              <p>Your website goes live. You own it completely.</p>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.processStep}>
              <div className={styles.stepCircle}>5</div>
              <h3>Grow</h3>
              <p>We manage it. You focus on your business. Success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="container">
          <h2>Meet Kyle</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.imagePlaceholder}>👤</div>
              </div>
              <h3>Kyle Mann</h3>
              <p className={styles.role}>Founder & Web Designer</p>
              <p>
                Kyle has been building websites for 5+ years, helping Steamboat Springs businesses establish their online presence. He's obsessed with clean design, fast performance, and customer success.
              </p>
              <p>
                When he's not coding, you'll find Kyle hiking in the Steamboat area or enjoying local coffee shops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>Let's build something bold for your business.</p>
          <div className={styles.ctaButtons}>
            <Link href="/#contact-form" className="btn btn-primary">
              Get Your Free Website
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
