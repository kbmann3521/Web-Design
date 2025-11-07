'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from '@/styles/Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>HIGH ROCKIES</span>
            <span className={styles.logoSub}>Web Design</span>
          </Link>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </nav>

          <Link href="/#contact-form" className="btn btn-primary">
            Get Started
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
