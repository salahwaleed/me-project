import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    q: 'What age groups do you teach?',
    a: 'Three paths, grouped by how kids actually learn at each stage: Kids Coding for ages 6–10 (Scratch), Junior Developers for ages 11–15 (Python), and Future Developers for ages 16–18 (web, mobile, and applied AI).',
  },
  {
    q: 'Do students need their own laptop?',
    a: 'Yes — any laptop or desktop able to run a modern browser works. No special software is required to get started; everything runs through the platform.',
  },
  {
    q: 'How do classes work — live or self-paced?',
    a: 'Each path combines guided lessons with real projects, so students move at their own pace but always have a mentor to check in with when they get stuck.',
  },
  {
    q: 'Can I book a free trial class?',
    a: "Yes — tap the WhatsApp button in the corner and we'll set up a free trial session for your child's age group.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="section-head" style={{ margin: '0 auto 44px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ margin: '0 auto' }}>
            <span className="dot" />
            QUESTIONS
          </div>
          <h2>Frequently asked</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className="faq-item" key={f.q}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <span className="plus">{open === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="faq-a">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
