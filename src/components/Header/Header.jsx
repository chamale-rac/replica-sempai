import React from 'react'
import * as headerStyles from './header.module.css'

import { CursorContext } from '../../Contexts'

const { useContext } = React

function Header() {
  const { setCursor } = useContext(CursorContext)
  return (
    <div className={headerStyles.container}>
      <div
        className={headerStyles.logo}
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
      <nav className={headerStyles.nav}>
        <ul>
          <li className={headerStyles.nav_li}>
            <button
              className={`${headerStyles.logo} ${headerStyles.button}`}
              onMouseEnter={() => {
                setCursor({ type: 'pointer' })
              }}
              onMouseLeave={() => {
                setCursor({ type: null })
              }}
              type="button"
            >
              Projects
            </button>
            <div className={headerStyles.detail_container}>
              <div className={headerStyles.detail}>Best experiments</div>
            </div>
          </li>

          <li className={headerStyles.nav_li}>
            <button
              className={`${headerStyles.logo} ${headerStyles.button}`}
              onMouseEnter={() => {
                setCursor({ type: 'pointer' })
              }}
              onMouseLeave={() => {
                setCursor({ type: null })
              }}
              type="button"
            >
              About me
            </button>
            <div className={headerStyles.detail_container}>
              <div className={headerStyles.detail}>Sempai you said?</div>
            </div>
          </li>

          <li className={headerStyles.nav_li}>
            <button
              className={`${headerStyles.logo} ${headerStyles.button}`}
              onMouseEnter={() => {
                setCursor({ type: 'pointer' })
              }}
              onMouseLeave={() => {
                setCursor({ type: null })
              }}
              type="button"
            >
              Contact
            </button>
            <div className={headerStyles.detail_container}>
              <div className={headerStyles.detail}>Let's glitch together</div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
// TODO add Dynamic cursor
