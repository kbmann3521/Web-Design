import styles from '@/styles/Portfolio.module.css'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: 'Mountain Lodge Resort',
      description: 'Luxury resort showcasing stunning visuals and online booking system',
      industry: 'Hospitality',
      features: ['E-commerce', 'Booking System', 'Gallery'],
    },
    {
      id: 2,
      name: 'Local Craft Brewery',
      description: 'Vibrant site highlighting products, events, and brewery story',
      industry: 'Food & Beverage',
      features: ['Product Showcase', 'Event Calendar', 'Blog'],
    },
    {
      id: 3,
      name: 'Wellness Center',
      description: 'Modern health practice with appointment scheduling and education',
      industry: 'Healthcare',
      features: ['Appointment Booking', 'Education Hub', 'Staff Directory'],
    },
    {
      id: 4,
      name: 'Outdoor Adventure Company',
      description: 'Action-packed site for tours and outdoor experiences',
      industry: 'Tourism',
      features: ['Tour Booking', 'Photo Gallery', 'Testimonials'],
    },
    {
      id: 5,
      name: 'Boutique Design Studio',
      description: 'Creative portfolio showcasing design work and process',
      industry: 'Creative',
      features: ['Portfolio Grid', 'Case Studies', 'Contact Forms'],
    },
    {
      id: 6,
      name: 'Real Estate Firm',
      description: 'Property listings with advanced search and virtual tours',
      industry: 'Real Estate',
      features: ['Property Search', 'Virtual Tours', 'CRM Integration'],
    },
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>Our Work</h1>
          <p>Custom-built, lightweight, SEO-optimized websites. Every one custom-coded. None are templates.</p>
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.portfolioGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.portfolioCard}>
                <div className={styles.cardImage}>
                  <div className={styles.imagePlaceholder}>🌐</div>
                </div>
                <div className={styles.cardContent}>
                  <h3>{project.name}</h3>
                  <p className={styles.industry}>{project.industry}</p>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.features}>
                    {project.features.map((feature) => (
                      <span key={feature} className={styles.feature}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Websites Built</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>
                "Kyle took our vision and created something even better than we imagined. Professional, responsive, and exactly what we needed."
              </p>
              <p className={styles.author}>— Sarah Johnson, Mountain Lodge Resort</p>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>
                "The best part? We don't have to worry about anything. Kyle handles updates, fixes, everything. Amazing service."
              </p>
              <p className={styles.author}>— Marcus Chen, Craft Brewery</p>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>
                "We got a free website and $59/month was an easy investment. Since then, it's more than paid for itself in new clients."
              </p>
              <p className={styles.author}>— Dr. Emily Rodriguez, Wellness Center</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready for Your Bold Website?</h2>
          <p>See your business online. Free design, managed growth.</p>
          <a href="/#contact-form" className="btn btn-primary">
            Get Started Today
          </a>
        </div>
      </section>
    </>
  )
}
