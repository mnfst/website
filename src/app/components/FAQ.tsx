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
      question: 'What is a headless CMS ?',
      answer: `A classical CMS manages the backend and the frontend part. A Headless CMS removes the frontend so you are free to use your own one, using an API to connect to it. Manifest also covers the "back-office" / "admin panel" as it can be seen as part of the "backend"`
    },
    {
      question: 'Is Manifest a low-code / no-code tool ?',
      answer:
        "No. It just works like just any other file in your codebase. It's code, simple code."
    },
    {
      question: 'Is Manifest for me?',
      answer:
        't does not matter if you are junior or senior developer, if you code in JS, PHP or Python. You can be frontend, backend or fullstack, a mobile developer, indie hacker or devsigner. If you know a bit of software development, you will have no problem using Manifest.'
    },
    {
      question: 'Can I use Manifest in production?',
      answer:
        'Manifest is currently in BETA, you can use it at your own risk. It is stable enough to power small projects, prototypes and MVPs but we do not recommend to use it on critical platforms.'
    },
    {
      question: 'What is behind the magic?',
      answer:
        'Good sense and ordinary popular stacks: the current version runs on NodeJS, Express and NestJS. We use JSON Schema to validate the YAML file, JS-YAML to parse it and TypeORM to map it into a SQLite database.'
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
