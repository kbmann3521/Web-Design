import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <h3>High Rockies Web Design</h3>
            <p>Building bold, modern websites for High Rockies businesses.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <nav className={styles.footerNav}>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>

          <div>
            <h4>Services</h4>
            <nav className={styles.footerNav}>
              <Link href="/services#custom-design">Custom Design</Link>
              <Link href="/services#hosting">Hosting & Management</Link>
              <Link href="/services#maintenance">Maintenance & Support</Link>
              <Link href="/services#free-edits">Free Edits</Link>
            </nav>
          </div>

          <div>
            <h4>Get Started</h4>
            <p style={{ marginBottom: '1rem' }}>Ready to launch your online presence?</p>
            <Link href="/#contact-form" className="btn btn-primary" style={{ display: 'inline-block' }}>
              Request Your Free Website
            </Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 High Rockies Web Design. All rights reserved.</p>
          <p>Serving High Rockies and surrounding areas.</p>
        </div>
      </div>
    </footer>
  )
}
