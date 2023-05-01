import React from 'react'
import * as loaderStyles from './loader.module.css'

function Loader() {
  return (
    <div className={loaderStyles.container}>
      <div className={loaderStyles.curtain_wrapper}>
        <div className={loaderStyles.curtain_left} />
        <div className={loaderStyles.curtain_right} />
      </div>
      <div className={loaderStyles.vertical_white_line} />
      <div className={loaderStyles.icon_wrapper}>
        <img
          src="https://dwl.media/assets/icons/kanji.svg"
          alt="kanji"
          className={loaderStyles.kanji}
        />
        <div className={loaderStyles.path}>
          <img
            src="https://dwl.media/assets/icons/path.svg"
            alt="circular letters"
            className={loaderStyles.path_inner}
          />
        </div>
      </div>
    </div>
  )
}

export default Loader
