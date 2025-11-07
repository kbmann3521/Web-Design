import Link from 'next/link'
import styles from '@/styles/Services.module.css'

export default function Services() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Custom-built websites with modern technology. Not templates. Not bloated. Just smart, fast, SEO-optimized sites that work.</p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.serviceRow}>
            <div className={styles.serviceContent}>
              <h2 id="custom-design">Custom Website Design</h2>
              <p>
                We create stunning, custom websites tailored to your business. Your site isn't built from a template—it's crafted specifically for your brand, your customers, and your goals.
              </p>
              <p>
                Every website is hand-coded with modern technology (Next.js/React), not built on bloated templates. This means your site is lightweight, blazing fast, and built for Google's ranking algorithm. Your competitors might be using outdated templates; you'll have a custom, optimized website that actually performs.
              </p>
              <ul className={styles.serviceList}>
                <li>Fully custom design (zero templates)</li>
                <li>Built with modern, lightweight tech</li>
                <li>Blazing fast load times</li>
                <li>Optimized for Google search rankings</li>
                <li>Mobile-responsive on all devices</li>
                <li>Clean, SEO-friendly code foundation</li>
                <li>Integration with your tools and systems</li>
                <li>Unlimited revisions during design phase</li>
              </ul>
              <p className={styles.emphasis}>Price: FREE when you choose our management plan</p>
            </div>
            <div className={styles.serviceImage}>
              <div className={styles.imagePlaceholder}>💻</div>
            </div>
          </div>

          <div className={styles.serviceRow}>
            <div className={styles.serviceImage}>
              <div className={styles.imagePlaceholder}>🌐</div>
            </div>
            <div className={styles.serviceContent}>
              <h2 id="hosting">Hosting & Management</h2>
              <p>
                $59 per month gets you hosting, backups, security, performance monitoring, and instant updates. We handle the technical stuff so you can focus on your business.
              </p>
              <ul className={styles.serviceList}>
                <li>Professional hosting (blazing fast)</li>
                <li>Automatic daily backups</li>
                <li>SSL security certificate</li>
                <li>Ongoing performance optimization</li>
                <li>Spam & malware protection</li>
                <li>99.9% uptime guarantee</li>
              </ul>
              <p className={styles.emphasis}>Price: $59/month (includes everything below)</p>
            </div>
          </div>

          <div className={styles.serviceRow}>
            <div className={styles.serviceContent}>
              <h2 id="maintenance">Maintenance & Support</h2>
              <p>
                Our management includes all updates, maintenance, and technical support. If something breaks, we fix it. Period.
              </p>
              <ul className={styles.serviceList}>
                <li>All software updates & patches</li>
                <li>Performance monitoring 24/7</li>
                <li>Emergency support response</li>
                <li>Speed optimization</li>
                <li>Security hardening</li>
              </ul>
              <p className={styles.emphasis}>Included with $59/month management plan</p>
            </div>
            <div className={styles.serviceImage}>
              <div className={styles.imagePlaceholder}>🛠️</div>
            </div>
          </div>

          <div className={styles.serviceRow}>
            <div className={styles.serviceImage}>
              <div className={styles.imagePlaceholder}>✏️</div>
            </div>
            <div className={styles.serviceContent}>
              <h2 id="free-edits">Unlimited Free Edits</h2>
              <p>
                Need to change something? Update your photos? Add new content? Just call or email. We'll handle it.
              </p>
              <ul className={styles.serviceList}>
                <li>Content updates anytime</li>
                <li>Photo changes & replacements</li>
                <li>Copy editing & rewrites</li>
                <li>New feature additions (within reason)</li>
                <li>Design tweaks & refinements</li>
              </ul>
              <p className={styles.emphasis}>Included with $59/month management plan</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.comparisonSection}>
        <div className="container">
          <h2>Why We're Different</h2>
          <div className={styles.comparisonTable}>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Feature</div>
              <div className={styles.tableCell}>Traditional Agency</div>
              <div className={styles.tableCell}>High Rockies Web Design</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Design Cost</div>
              <div className={styles.tableCell}>$3,000 - $15,000</div>
              <div className={styles.tableCell}>FREE</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Ongoing Support</div>
              <div className={styles.tableCell}>Extra fees per change</div>
              <div className={styles.tableCell}>Unlimited</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Hosting</div>
              <div className={styles.tableCell}>Extra per month</div>
              <div className={styles.tableCell}>Included</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Accessibility</div>
              <div className={styles.tableCell}>Email only</div>
              <div className={styles.tableCell}>Call anytime</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Ownership</div>
              <div className={styles.tableCell}>Agency manages everything</div>
              <div className={styles.tableCell}>100% yours</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Technology</div>
              <div className={styles.tableCell}>Templates + plugins (bloated)</div>
              <div className={styles.tableCell}>Custom-built code (lightweight & fast)</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>SEO & Performance</div>
              <div className={styles.tableCell}>Generic templates hurt rankings</div>
              <div className={styles.tableCell}>Optimized for Google rankings</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.wixSection}>
        <div className="container">
          <h2>Why Custom Code Beats Wix & Similar Platforms</h2>
          <p className={styles.sectionIntro}>
            Many business owners turn to Wix, Squarespace, or similar drag-and-drop builders. They seem cheap and easy. But there's a hidden cost that catches up with every business.
          </p>

          <div className={styles.wixComparisonGrid}>
            <div className={styles.wixCard}>
              <h3>🔒 You're Locked In</h3>
              <p>
                <strong>Wix/Squarespace:</strong> Your website lives on their servers. You can't take your code. If you ever want to leave, you start from zero.
              </p>
              <p>
                <strong>Custom Code:</strong> Your website is 100% yours. You own the code. You can move it anywhere anytime. You're never trapped.
              </p>
            </div>

            <div className={styles.wixCard}>
              <h3>💥 What If They Go Out of Business?</h3>
              <p>
                <strong>Wix/Squarespace:</strong> If they shut down, your website disappears. It's happened to businesses. Your entire online presence, gone.
              </p>
              <p>
                <strong>Custom Code:</strong> Your site runs on stable hosting. You control it. No single company can take it away.
              </p>
            </div>

            <div className={styles.wixCard}>
              <h3>🎯 Limited Flexibility</h3>
              <p>
                <strong>Wix/Squarespace:</strong> Your website works how THEY decide. Need a custom feature? Tough. Want to integrate something? Better hope they support it.
              </p>
              <p>
                <strong>Custom Code:</strong> Your site does what YOUR business needs. Custom integrations, unique features, advanced functionality—all possible.
              </p>
            </div>

            <div className={styles.wixCard}>
              <h3>📈 SEO Limitations</h3>
              <p>
                <strong>Wix/Squarespace:</strong> These platforms share servers with thousands of other sites. Google sees bloated, generic code. Ranking is harder.
              </p>
              <p>
                <strong>Custom Code:</strong> Clean, optimized code built just for you. Faster loading. Better for SEO. You rank higher on Google.
              </p>
            </div>

            <div className={styles.wixCard}>
              <h3>💸 Hidden Costs</h3>
              <p>
                <strong>Wix/Squarespace:</strong> Starts cheap. But then you need premium plans ($20-40/month), apps ($5-20 each), SSL certificates, email hosting. Suddenly you're paying $100+/month.
              </p>
              <p>
                <strong>Custom Code:</strong> One price. $59/month. Hosting, SSL, security, unlimited edits, support. Everything included. No surprises.
              </p>
            </div>

            <div className={styles.wixCard}>
              <h3>⚡ Performance & Speed</h3>
              <p>
                <strong>Wix/Squarespace:</strong> Bloated with features you don't use. Heavy JavaScript. Slow loading times hurt your SEO and user experience.
              </p>
              <p>
                <strong>Custom Code:</strong> Lightweight. Fast. Only the code you need, nothing more. Better user experience. Better for conversions.
              </p>
            </div>

            <div className={styles.wixCard}>
              <h3>🚀 Business Growth</h3>
              <p>
                <strong>Wix/Squarespace:</strong> As your business grows and you need more, you hit limitations. Then you have to rebuild on a different platform.
              </p>
              <p>
                <strong>Custom Code:</strong> Your website grows with your business. Need new features? We add them. Want integrations? Done. No rebuilding needed.
              </p>
            </div>

            <div className={styles.wixCard}>
              <h3>🔐 Security & Control</h3>
              <p>
                <strong>Wix/Squarespace:</strong> You trust them with your data. Their security is their problem. Your data breaches? You're affected.
              </p>
              <p>
                <strong>Custom Code:</strong> We control your security. Daily backups. SSL certificates. Malware protection. Your data, your protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Your free website is waiting. Let's build something amazing together.</p>
          <Link href="/#contact-form" className="btn btn-primary">
            Start Your Free Website
          </Link>
        </div>
      </section>
    </>
  )
}
