import React from 'react'
import { BOOK_TITLE } from '../content.js'
import { Link } from '../router.jsx'

// Sticky top rail: wordmark, chapter marker, red CALL 911 pill (tel:911).
export default function EmergencyRail({ marker, tone = 'warn' }) {
  return (
    <header className="rail">
      <div className="rail__inner wrap">
        <Link to="/" className="rail__wordmark">
          {BOOK_TITLE}
        </Link>
        <p className="rail__marker">{marker}</p>
        <a className={`rail__pill rail__pill--${tone}`} href="tel:911">
          CALL 911
        </a>
      </div>
    </header>
  )
}
