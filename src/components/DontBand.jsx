import React from 'react'

// Red left border, DON'T heading in --warn, the line and the picture.
export default function DontBand({ body, img, alt }) {
  return (
    <section className="dont" aria-labelledby="dont-heading">
      <div className="dont__text">
        <h3 className="dont__heading" id="dont-heading">
          DON&apos;T
        </h3>
        <p className="dont__body">{body}</p>
      </div>
      <figure className="dont__figure">
        <img
          className="dont__image"
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
