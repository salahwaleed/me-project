import { motion } from 'framer-motion'

const courses = [
  {
    cls: 'c1',
    tag: 'Age 6–10',
    icon: '🐱',
    title: 'Kids Coding',
    role: 'First steps into logic and play',
    points: ['Scratch, block by block', 'Build simple games', 'Logic & sequencing basics'],
  },
  {
    cls: 'c2',
    tag: 'Age 11–15',
    icon: '🐍',
    title: 'Junior Developers',
    role: 'From blocks to real syntax',
    points: ['Python fundamentals', 'Algorithms & problem solving', 'Guided coding projects'],
  },
  {
    cls: 'c3',
    tag: 'Age 16–18',
    icon: '🚀',
    title: 'Future Developers',
    role: 'Building things that ship',
    points: ['Web & mobile development', 'Intro to AI & applied ML', 'Portfolio-grade builds'],
  },
]

export default function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">
            <span className="dot" />
            THREE PATHS, ONE JOURNEY
          </div>
          <h2>A path for every age</h2>
          <p>
            Courses are grouped by how kids actually learn at each stage —
            not a single curriculum stretched thin.
          </p>
        </div>
        <div className="course-grid">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              className={`course-card ${c.cls}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="course-age">
                <span>PATH 0{i + 1}</span>
                <span className="badge">{c.tag}</span>
              </div>
              <div className="course-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p className="role">{c.role}</p>
              <ul className="course-list">
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
