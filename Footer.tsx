export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div className="brand">
          <span className="brand-mark">{'</>'}</span>Bytonia Academy
        </div>
        <p>© {new Date().getFullYear()} Bytonia Academy. Code today, build tomorrow.</p>
      </div>
    </footer>
  )
}
