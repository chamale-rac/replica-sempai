import React from 'react'
import * as stampStyles from './stamp.module.css'

import { CursorContext } from '../../Contexts'

const { useContext } = React

function Stamp() {
  const { setCursor } = useContext(CursorContext)
  return (
    <div
      className={stampStyles.stamp}
      onMouseEnter={() => {
        setCursor({ type: 'pointer' })
      }}
      onMouseLeave={() => {
        setCursor({ type: null })
      }}
    >
      <div className={stampStyles.wrapper}>
        <img
          src="https://dwl.media/assets/icons/kanji.svg"
          alt="kanji"
          className={stampStyles.kanji}
        />
        <div>
          <img
            src="https://dwl.media/assets/icons/path.svg"
            alt="circular letters"
            className={stampStyles.path_inner}
          />
        </div>
      </div>
    </div>
  )
}

export default Stamp
