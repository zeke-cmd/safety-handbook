import React, { useEffect, useRef, useState } from 'react'

// One numbered step band. The numeral turns --safe once the band is
// 40 percent or more inside the viewport.
export default function StepBand({ n, h, body, img, alt }) {
  const bandRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = bandRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive(entry.isIntersecting && entry.intersectionRatio >= 0.4)
        })
      },
      { threshold: [0, 0.4, 0.75, 1] },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="step" ref={bandRef} aria-labelledby={`step-${n}`}>
      <div className="step__text">
        <p className={`step__numeral${active ? ' is-active' : ''}`}>{n}</p>
        <h3 className="step__headline" id={`step-${n}`}>
          {h}
        </h3>
        <p className="step__body">{body}</p>
      </div>
      <figure className="step__figure">
        <img
          className="step__image"
          src={img}
          alt={alt}
          width="1152"
          height="1536"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}
