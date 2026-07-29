import { motion } from 'framer-motion'
import ThreeHero from './ThreeHero'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="hero">
      <ThreeHero />
      <div className="wrap">
        <motion.div
          className="hero-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="eyebrow" variants={item}>
            <span className="dot" />
            AGES 6–18 · SCRATCH · PYTHON · WEB · AI
          </motion.div>
          <motion.h1 variants={item}>
            Build Your Future
            <br />
            With Code
          </motion.h1>
          <motion.p className="ar" variants={item}>
            تعلم البرمجة بطريقة عملية، ممتعة، ومنظمة
          </motion.p>
          <motion.p className="sub" variants={item}>
            A structured path from a child's first Scratch game to a
            teenager's first deployed web app — with real projects, a live
            dashboard, and mentors who show up.
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <motion.a
              href="#courses"
              className="btn btn-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Learning →
            </motion.a>
            <motion.a
              href="#courses"
              className="btn btn-ghost"
              whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Courses
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
