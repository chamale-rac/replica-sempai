import React from 'react'
import * as headerStyles from './header.module.css'

import { CursorContext } from '../../Contexts'

const { useContext } = React

function Header() {
  const { setCursor } = useContext(CursorContext)
  return (
    <div className={headerStyles.container}>
      <div
        onMouseEnter={() => {
          setCursor({ type: 'pointer' })
        }}
        onMouseLeave={() => {
          setCursor({ type: null })
        }}
        style={{ cursor: 'pointer' }}
      >
        Semp.ai
      </div>
      <div>
        <div>Projects</div>
        <div>About me</div>
        <div>Contact</div>
      </div>
    </div>
  )
}

export default Header
// TODO add Dynamic cursor
