import React from 'react'
import * as headerStyles from './header.module.css'

function Header() {
  return (
    <div className={`${headerStyles.container}`}>
      <div>Semp.ai</div>
      <div>
        <div>Projects</div>
        <div>About me</div>
        <div>Contact</div>
      </div>
    </div>
  )
}

export { Header }
// TODO add Dynamic cursor
