import { motion } from 'framer-motion'

// Replace with your real WhatsApp number in international format, no "+" or spaces
// e.g. "201234567890" for an Egyptian number starting 01234567890
const WHATSAPP_NUMBER = 'REPLACE_WITH_YOUR_NUMBER'
const MESSAGE = "Hi! I'd like to book a free trial class at Bytonia Academy."

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-btn"
      aria-label="Book a class on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.51 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98s.75-2.12 1.02-2.41c.26-.28.57-.35.76-.35h.55c.18 0 .42-.03.65.5.24.55.82 1.9.9 2.04.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.61-.14.24.09 1.55.73 1.82.86.26.14.44.2.5.31.06.12.06.68-.18 1.36Z"/>
      </svg>
    </motion.a>
  )
}
