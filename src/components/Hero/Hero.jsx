import React from 'react'
import * as heroStyles from './hero.module.css'

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
    </div>
  )
}

export default Hero
