import React, { useEffect, useRef, useState } from 'react'

const FPS = 8
const FRAME_MS = 1000 / FPS

// Tap to play the sequence at 8fps, tap again to pause. No autoplay.
// Under prefers-reduced-motion a tap advances exactly one frame.
export default function Flipbook({ frames, caption, alt }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [reduced, setReduced] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(query.matches)
    sync()
    if (query.addEventListener) {
      query.addEventListener('change', sync)
      return () => query.removeEventListener('change', sync)
    }
    query.addListener(sync)
    return () => query.removeListener(sync)
  }, [])

  useEffect(() => {
    if (!playing) return undefined
    timer.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length)
    }, FRAME_MS)
    return () => window.clearInterval(timer.current)
  }, [playing, frames.length])

  useEffect(() => {
    if (reduced && playing) setPlaying(false)
  }, [reduced, playing])

  const tap = () => {
    if (reduced) {
      setIndex((prev) => (prev + 1) % frames.length)
      return
    }
    setPlaying((prev) => !prev)
  }

  const step = (delta) => {
    setPlaying(false)
    setIndex((prev) => (prev + delta + frames.length) % frames.length)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      step(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      step(-1)
    }
  }

  const label = playing ? 'PAUSE' : 'PLAY'

  return (
    <section className="flip" aria-label="Flipbook">
      <div className="flip__stage">
        <button
          type="button"
          className="flip__frame"
          onClick={tap}
          onKeyDown={onKeyDown}
          aria-label={
            reduced
              ? 'Show the next frame'
              : playing
                ? 'Pause the sequence'
                : 'Play the sequence'
          }
        >
          {frames.map((src, i) => (
            <img
              key={src}
              className={`flip__image${i === index ? ' is-current' : ''}`}
              src={src}
              alt={i === index ? alt : ''}
              aria-hidden={i === index ? undefined : 'true'}
              width="1152"
              height="1536"
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              draggable="false"
            />
          ))}
        </button>
        <span className={`flip__badge${playing ? ' is-playing' : ''}`}>
          {label}
        </span>
        <ol className="flip__dots">
          {frames.map((src, i) => (
            <li
              key={src}
              className={`flip__dot${i === index ? ' is-current' : ''}`}
            />
          ))}
        </ol>
      </div>
      <p className="flip__caption">{caption}</p>
    </section>
  )
}
