'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import styles from '@/styles/ContactForm.module.css'

interface FormData {
  contactName: string
  email: string
  websiteIdeas: string
}

interface FormStatus {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    contactName: '',
    email: '',
    websiteIdeas: '',
  })

  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: 'idle',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send form')
      }

      setFormStatus({
        status: 'success',
        message: 'Thanks! I\'ll be in touch shortly with your free website.',
      })

      setFormData({
        contactName: '',
        email: '',
        websiteIdeas: '',
      })

      setTimeout(() => {
        setFormStatus({ status: 'idle', message: '' })
      }, 5000)
    } catch (error) {
      setFormStatus({
        status: 'error',
        message: 'Something went wrong. Please try again or call us directly.',
      })
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
      <div className={styles.formGroup}>
        <label htmlFor="contactName">Your Name *</label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          required
          placeholder="Your full name"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>

      </div>

      <div className={styles.formGroup}>
        <label htmlFor="websiteIdeas">Tell me about your website ideas *</label>
        <textarea
          id="websiteIdeas"
          name="websiteIdeas"
          value={formData.websiteIdeas}
          onChange={handleChange}
          required
          placeholder="Help me understand your vision: What's your business name? What should your website accomplish? Who are your customers? What makes your business unique? What features are important to you?"
          rows={5}
        />
      </div>


      {formStatus.status === 'success' && (
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✓</div>
          <p>{formStatus.message}</p>
          <p className={styles.subMessage}>You'll hear from us within 24 hours!</p>
        </div>
      )}

      {formStatus.status === 'error' && (
        <div className={styles.errorMessage}>
          <p>{formStatus.message}</p>
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={formStatus.status === 'loading'}
      >
        {formStatus.status === 'loading' ? 'Sending...' : 'Get My Free Website'}
      </button>

      <p className={styles.formNote}>
        * All fields required. We'll never spam you. Just genuine web design goodness.
      </p>
    </form>
  )
}
