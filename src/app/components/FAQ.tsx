import './FAQ.scss'

type FAQItem = {
  question: string
  answer: string
}

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: 'What is the purpose of this website?',
      answer:
        'To provide a place for people to learn and share their knowledge.'
    },
    {
      question: 'How do I get started?',
      answer: 'Click on the "Get Started" button and follow the instructions.'
    },
    {
      question: 'How do I get started?',
      answer: 'Click on the "Get Started" button and follow the instructions.'
    },
    {
      question: 'How do I get started?',
      answer: 'Click on the "Get Started" button and follow the instructions.'
    },
    {
      question: 'How do I get started?',
      answer: 'Click on the "Get Started" button and follow the instructions.'
    },
    {
      question: 'How do I get started?',
      answer: 'Click on the "Get Started" button and follow the instructions.'
    }
  ]

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            aria-controls={`faq-content-${index}`}
            className="faq-question"
          >
            {faq.question}
          </button>
          <div id={`faq-content-${index}`} className={`faq-answer`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
