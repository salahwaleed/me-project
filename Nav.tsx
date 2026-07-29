export default function Nav() {
  return (
    <nav className="nav">
      <div className="brand">
        <span className="brand-mark">{'</>'}</span>Bytonia Academy
      </div>
      <div className="nav-links">
        <a href="#courses">Courses</a>
        <a href="#testimonials">Stories</a>
        <a href="#faq">FAQ</a>
      </div>
      <a href="#courses" className="nav-cta">Start Learning</a>
    </nav>
  )
}
