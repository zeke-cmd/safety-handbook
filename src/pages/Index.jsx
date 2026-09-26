import React from 'react'
import EmergencyRail from '../components/EmergencyRail.jsx'
import {
  chapters,
  panicTiles,
  chapterPath,
  BOOK_TITLE,
  INDEX_DECK,
  FOOTER_CREDIT,
} from '../content.js'
import { Link } from '../router.jsx'

// Door 1: it is happening now. Door 2: read it calmly.
export default function Index() {
  return (
    <>
      <EmergencyRail marker="INDEX · 7 CHAPTERS" tone="warn" />
      <main id="main">
        <section className="index-hero wrap">
          <p className="kicker">PART I · SEVEN CHAPTERS</p>
          <h1 className="index-hero__title">{BOOK_TITLE}</h1>
          <p className="index-hero__deck">{INDEX_DECK}</p>
        </section>

        <section className="door wrap" aria-labelledby="door-one">
          <p className="kicker">DOOR 01</p>
          <h2 className="door__title" id="door-one">
            IT IS HAPPENING NOW
          </h2>
          <p className="door__note">Tap the picture. The first page you need is the page you open.</p>
          <ul className="panic">
            {panicTiles.map((tile) => {
              const chapter = chapters.find((c) => '/' + c.id === tile.to)
              return (
                <li key={tile.to} className="panic__item">
                  <Link
                    to={tile.to}
                    className="tile"
                    style={{ backgroundImage: `url(${tile.img})` }}
                  >
                    <span className="tile__num">{chapter ? chapter.num : ''}</span>
                    <span className="tile__label">{tile.label}</span>
                    <span className="tile__title">{chapter ? chapter.title : ''}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="door wrap" aria-labelledby="door-two">
          <p className="kicker">DOOR 02</p>
          <h2 className="door__title" id="door-two">
            READ IT CALMLY
          </h2>
          <p className="door__note">Seven chapters. One action per step. No hurry.</p>
          <ol className="list">
            {chapters.map((chapter) => (
              <li key={chapter.id} className="list__item">
                <Link to={chapterPath(chapter)} className="list__link">
                  <span className="list__num">{chapter.num}</span>
                  <span className="list__name">{chapter.title}</span>
                  <span className="list__arrow" aria-hidden="true">
                    &#8594;
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <footer className="foot wrap">
        <p className="foot__line">{FOOTER_CREDIT}</p>
        <p className="foot__line foot__line--muted">{BOOK_TITLE}</p>
      </footer>
    </>
  )
}
