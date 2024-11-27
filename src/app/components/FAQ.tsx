'use client'

import React, { useEffect, useRef, useState } from 'react'
import './FAQ.scss'

type FAQItem = {
  question: string
  answer: string
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<Array<HTMLDivElement | null>>([])

  const faqs: FAQItem[] = [
    {
      question: 'Is Manifest a framework?',
      answer:
        'No, Manifest is a self-hostable Backend-as-a-Service (BaaS). It is a service that enables developers to easily build a backend, providing the essential building blocks to get started.'
    },
    {
      question: 'Is Manifest full-stack?',
      answer:
        'No, you will still need to develop your frontend. Manifest covers the backend of your app/website only (considering the built-in admin panel as part of the backend/back-office).'
    },
    {
      question: 'Is Manifest for me?',
      answer:
        'If you know a bit of software development, whatever your programming language is, you will have no problem using Manifest.'
    },
    {
      question: 'Can I use Manifest in production?',
      answer:
        'Manifest is currently in BETA, you can use it at your own risk. It is stable enough to power small projects, prototypes and MVPs but we do not recommend to use it on critical platforms.'
    },
    {
      question: 'What is behind the magic?',
      answer:
        'Good sense and common top stacks: the current version runs on NodeJS, Express and NestJS. The Database is SQLite, using TypeORM and JS-YAML to go convert your YAML into a DB structure.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        content.style.height =
          openIndex === index ? `${content.scrollHeight}px` : '0px'
      }
    })
  }, [openIndex])

  return (
    <div className="content">
      <div className="has-text-centered">
        <h2 className="mb-6">FAQ</h2>
      </div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="card is-shadowless faq-item mb-4 has-background-white-bis"
        >
          <a
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
            className="faq-question has-text-dark is-flex is-justify-content-space-between is-align-items-center"
          >
            <h4 className="mb-0">{faq.question}</h4>
            <i
              className={`lni ${
                openIndex === index ? 'lni-chevron-up' : 'lni-chevron-down'
              }`}
            ></i>
          </a>
          <div
            id={`faq-content-${index}`}
            ref={(el) => (contentRefs.current[index] = el)}
            className="faq-answer"
            style={{
              overflow: 'hidden',
              transition: 'height 0.3s ease-in-out'
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
