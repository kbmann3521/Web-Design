import Link from 'next/link'
import styles from '@/styles/Pricing.module.css'

export default function Pricing() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>Pricing That Makes Sense</h1>
          <p>Custom-built websites. No bloated templates. Lightning-fast performance. Great for SEO. One honest price for everything.</p>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.cardBadge}>Most Popular</div>
              <h2>The Complete Package</h2>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>59</span>
                <span className={styles.period}>/month</span>
              </div>
              <p className={styles.subtitle}>Everything you need, forever</p>
              
              <ul className={styles.features}>
                <li>Custom website design</li>
                <li>Premium hosting</li>
                <li>Unlimited free edits</li>
                <li>24/7 maintenance & support</li>
                <li>Daily backups & security</li>
                <li>Performance monitoring</li>
                <li>Mobile responsive design</li>
                <li>SEO foundation included</li>
              </ul>

              <div className={styles.whatIncluded}>
                <h3>What's Included:</h3>
                <div className={styles.section}>
                  <h4>🎨 Design Phase (FREE)</h4>
                  <ul>
                    <li>Custom website design (no templates)</li>
                    <li>Unlimited revisions</li>
                    <li>Your ownership always</li>
                  </ul>
                </div>

                <div className={styles.section}>
                  <h4>🌐 Hosting Phase ($59/month)</h4>
                  <ul>
                    <li>Professional hosting</li>
                    <li>SSL security certificate</li>
                    <li>Automatic backups</li>
                    <li>Speed optimization</li>
                  </ul>
                </div>

                <div className={styles.section}>
                  <h4>✏️ Management Phase ($59/month)</h4>
                  <ul>
                    <li>All software updates</li>
                    <li>Content changes & edits</li>
                    <li>Image updates</li>
                    <li>Emergency support</li>
                    <li>Performance tuning</li>
                  </ul>
                </div>
              </div>

              <Link href="/#contact-form" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Get Your Free Website
              </Link>
            </div>

            <div className={styles.comparisonCard}>
              <h2>Why This Model?</h2>
              <div className={styles.comparisonList}>
                <div className={styles.comparisonItem}>
                  <div className={styles.comparisonCheck}>✓</div>
                  <div>
                    <h4>Zero Upfront Cost</h4>
                    <p>We design your site for free. You pay nothing until you're happy.</p>
                  </div>
                </div>

                <div className={styles.comparisonItem}>
                  <div className={styles.comparisonCheck}>✓</div>
                  <div>
                    <h4>100% Your Website</h4>
                    <p>You own it completely. Never worry about losing your site.</p>
                  </div>
                </div>

                <div className={styles.comparisonItem}>
                  <div className={styles.comparisonCheck}>✓</div>
                  <div>
                    <h4>True Partnership</h4>
                    <p>We're invested in your success. We help you grow.</p>
                  </div>
                </div>

                <div className={styles.comparisonItem}>
                  <div className={styles.comparisonCheck}>✓</div>
                  <div>
                    <h4>No Surprises</h4>
                    <p>$59/month. That's it. All hosting, edits, and support included.</p>
                  </div>
                </div>

                <div className={styles.comparisonItem}>
                  <div className={styles.comparisonCheck}>✓</div>
                  <div>
                    <h4>Real Support</h4>
                    <p>Call anytime with questions or requests. We're here to help.</p>
                  </div>
                </div>

                <div className={styles.comparisonItem}>
                  <div className={styles.comparisonCheck}>✓</div>
                  <div>
                    <h4>Local Expertise</h4>
                    <p>We're based in High Rockies. We know your market.</p>
                  </div>
                </div>

                <div className={styles.comparisonItem}>
                  <div className={styles.comparisonCheck}>✓</div>
                  <div>
                    <h4>Built for SEO & Speed</h4>
                    <p>Custom code (not templates). Lightweight. Fast-loading. Optimized for Google rankings. Your competitors are still using bloated templates.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Can I cancel anytime?</h3>
              <p>Absolutely! You're never locked in. Cancel anytime and we'll hand over your complete website—you're free to host and manage it independently. But we hope you'll come back when you need us!</p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if I need more than free edits?</h3>
              <p>Unlimited edits are included in your $59/month plan. We don't count changes. Just ask.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can I use a different domain name?</h3>
              <p>You can use any domain name you own or any available domain name and we'll set it up for you.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if I want to leave later?</h3>
              <p>Your website is 100% yours. You can do whatever you want with it.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Do you guarantee uptime?</h3>
              <p>We guarantee 99.9% uptime with automatic monitoring. If something goes down, we're on it immediately.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>What about SSL certificates and security?</h3>
              <p>All included. Your site is secure, fast, and compliant with industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Launch?</h2>
          <p>Your free custom website is waiting. Let's get started today.</p>
          <Link href="/#contact-form" className="btn btn-primary">
            Start Your Free Website
          </Link>
        </div>
      </section>
    </>
  )
}
