import React from 'react'
import * as heroStyles from './hero.module.css'
import Cube from './Cube/Cube'

import { CursorContext } from '../../Contexts'

const { useContext } = React

function Hero() {
  const { setCursor } = useContext(CursorContext)
  return (
    <div className={heroStyles.container}>
      <h1 className={heroStyles.title}>
        <span className={heroStyles.title_main}>D.W.L</span>
        <sup className={heroStyles.title_sup}>TM</sup>
      </h1>
      <div className={heroStyles.sphere}>
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
        <div className={heroStyles.ring} />
      </div>
      <div className={heroStyles.content}>
        <div className={heroStyles.dwl}>
          <h4 className={heroStyles.kanji}>愛</h4>
          <h4 className={heroStyles.phrase}>
            <span>
              DESIGN <br />
              WITH LOVE
            </span>
            <sup className={heroStyles.phrase_sup}>TM</sup>
          </h4>
        </div>
        <div
          className={heroStyles.reel}
          onMouseEnter={() => {
            setCursor({ type: 'pointer' })
          }}
          onMouseLeave={() => {
            setCursor({ type: null })
          }}
        >
          <Cube />
        </div>
        <div className={heroStyles.social}>
          <li
            className={heroStyles.social_item}
            onMouseEnter={() => {
              setCursor({ type: 'pointer' })
            }}
            onMouseLeave={() => {
              setCursor({ type: null })
            }}
          >
            <a
              href="https://www.behance.net/dwl_media"
              target="_blank"
              className={heroStyles.social_link}
              rel="noreferrer"
            >
              Behance
            </a>
          </li>
          <li
            className={heroStyles.social_item}
            onMouseEnter={() => {
              setCursor({ type: 'pointer' })
            }}
            onMouseLeave={() => {
              setCursor({ type: null })
            }}
          >
            <a
              href="https://vimeo.com/dwlmedia"
              target="_blank"
              className={heroStyles.social_link}
              rel="noreferrer"
            >
              Vimeo
            </a>
          </li>
          <li
            className={heroStyles.social_item}
            onMouseEnter={() => {
              setCursor({ type: 'pointer' })
            }}
            onMouseLeave={() => {
              setCursor({ type: null })
            }}
          >
            <a
              href="https://dribbble.com/semp_ai"
              target="_blank"
              className={heroStyles.social_link}
              rel="noreferrer"
            >
              Dribbble
            </a>
          </li>
          <li
            className={heroStyles.social_item}
            onMouseEnter={() => {
              setCursor({ type: 'pointer' })
            }}
            onMouseLeave={() => {
              setCursor({ type: null })
            }}
          >
            <a
              href="https://www.instagram.com/dwl.media/"
              target="_blank"
              className={heroStyles.social_link}
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Hero
