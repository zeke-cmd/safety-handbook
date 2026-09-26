import React from 'react'
import EmergencyRail from '../components/EmergencyRail.jsx'
import StepBand from '../components/StepBand.jsx'
import DontBand from '../components/DontBand.jsx'
import Flipbook from '../components/Flipbook.jsx'
import { FOOTER_CREDIT } from '../content.js'
import { Link } from '../router.jsx'

// One template for every chapter, data driven from src/content.js.
export default function Chapter({ chapter }) {
  const { num, title, deck, remember, hero, steps, dont, flip } = chapter

  return (
    <>
      <EmergencyRail marker={`${num} · ${title}`} tone="warn" />
      <main id="main">
        <article className="chapter">
          <header className="chapter-hero wrap">
            <p className="kicker">CHAPTER {num}</p>
            <h1 className="chapter-hero__title">{title}</h1>
            <p className="chapter-hero__deck">{deck}</p>
            <figure className="chapter-hero__figure">
              <img
                className="chapter-hero__image"
                src={hero}
                alt={`${title}: what the scene looks like`}
                width="1152"
                height="1536"
                loading="eager"
                decoding="async"
              />
            </figure>
          </header>

          <section className="remember wrap" aria-labelledby="remember-heading">
            <h2 className="remember__heading" id="remember-heading">
              IF YOU REMEMBER ONE THING
            </h2>
            <p className="remember__text">{remember}</p>
          </section>

          <div className="steps wrap">
            {steps.map((step, i) => (
              <React.Fragment key={step.n}>
                <StepBand
                  n={step.n}
                  h={step.h}
                  body={step.body}
                  img={step.img}
                  alt={`${title}, step ${step.n}: ${step.h}. ${step.body}`}
                />
                {flip && i === 1 ? (
                  <Flipbook
                    frames={flip.frames}
                    caption={flip.caption}
                    alt={`${title}: ${flip.caption}`}
                  />
                ) : null}
              </React.Fragment>
            ))}
          </div>

          <div className="wrap">
            <DontBand
              body={dont.body}
              img={dont.img}
              alt={`${title}: ${dont.body}`}
            />
          </div>

          <section className="chapter-foot wrap">
            <Link to="/" className="chapter-foot__back">
              BACK TO THE INDEX
            </Link>
          </section>
        </article>
      </main>
      <footer className="foot wrap">
        <p className="foot__line">{FOOTER_CREDIT}</p>
      </footer>
    </>
  )
}
