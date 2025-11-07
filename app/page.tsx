import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>
              Your <span className="gradient-text">Bold Website</span><br />
              Awaits
            </h1>
            <p className={styles.heroSubtitle}>
              Get a stunning, custom website built for FREE. Then we'll manage it for just $59/month. 
              That's it. No hidden fees. No headaches.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/#contact-form" className="btn btn-primary">
                Start Your Free Website
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                See Pricing Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✓</div>
              <h3>Free Custom Website</h3>
              <p>We design a stunning, unique website for your business. No cost, no obligation.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✓</div>
              <h3>100% Your Website</h3>
              <p>You own it completely. It's yours forever, no matter what.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✓</div>
              <h3>$59/Month Management</h3>
              <p>Hosting, maintenance, updates, and unlimited free edits. Everything included.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✓</div>
              <h3>No Work For You</h3>
              <p>We handle everything. You just run your business.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✓</div>
              <h3>Direct Access</h3>
              <p>Call anytime with changes or questions. We're here to serve you.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✓</div>
              <h3>Local Expertise</h3>
              <p>Based in High Rockies. We understand your local market.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Built for Speed & SEO</h3>
              <p>Custom-built with modern technology (not templates). Lightning-fast, optimized for search engines, and built to rank.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>100% Custom Code</h3>
              <p>No bloated templates or plugins slowing you down. Lightweight, clean code built specifically for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>You Tell Us Your Vision</h3>
              <p>Fill out a quick form about your business and website ideas.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>We Design Your Site</h3>
              <p>We create a bold, modern website tailored to your business.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>You Love It</h3>
              <p>Review, approve, and celebrate your new online presence.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <h3>We Manage It</h3>
              <p>For $59/month, we host and maintain it. You do nothing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaSubtitle}>
            No credit card required. No strings attached. Just a free custom website designed for your success.
          </p>
          <Link href="/#contact-form" className="btn btn-primary">
            Claim Your Free Website Now
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactWrapper}>
            <div>
              <h2>Let's Build Something Bold</h2>
              <p>
                Tell us about your business and the website you're imagining.
                You'll receive an email with your custom website in 24 hours or less.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
