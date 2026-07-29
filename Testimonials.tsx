import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      '"My son went from watching cartoons to building his own Scratch game in six weeks. He explains loops to me now."',
    who: 'Mona K.',
    role: 'Parent, Kids Coding',
  },
  {
    quote:
      '"The Python path actually builds — every lesson ends with something I made, not just something I watched."',
    who: 'Yousef R.',
    role: 'Student, Junior Developers',
  },
  {
    quote:
      '"I shipped my first real website here before I could drive. The projects go straight into my portfolio."',
    who: 'Salma T.',
    role: 'Student, Future Developers',
  },
]

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
}

export default function Testimonials() {
  const [[index, direction], setState] = useState([0, 0])

  const go = (dir: number) => {
    setState(([i]) => {
      const next = (i + dir + testimonials.length) % testimonials.length
      return [next, dir]
    })
  }

  const t = testimonials[index]

  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <div className="section-head" style={{ margin: '0 auto 44px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ margin: '0 auto' }}>
            <span className="dot" />
            FAMILIES & STUDENTS
          </div>
          <h2>What they say after finishing a path</h2>
        </div>
        <div className="slider">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              className="slide"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <blockquote>{t.quote}</blockquote>
              <div className="who">
                <b>{t.who}</b> — {t.role}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="slider-controls">
            <button className="slider-arrow" onClick={() => go(-1)} aria-label="Previous testimonial">‹</button>
            <div className="slider-dots">
              {testimonials.map((_, i) => (
                <span key={i} className={`slider-dot ${i === index ? 'on' : ''}`} />
              ))}
            </div>
            <button className="slider-arrow" onClick={() => go(1)} aria-label="Next testimonial">›</button>
          </div>
        </div>
      </div>
    </section>
  )
}
