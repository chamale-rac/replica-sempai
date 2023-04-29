import React from 'react'
import * as heroStyles from './hero.module.css'
import Cube from './Cube/Cube'

// import { CursorContext } from '../../Contexts'

// const { useContext } = React

function Hero() {
  // const { setCursor } = useContext(CursorContext)
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
        <div className={heroStyles.reel}>
          <Cube />
        </div>
        <div className={heroStyles.social}>Social</div>
      </div>
    </div>
  )
}

export default Hero
