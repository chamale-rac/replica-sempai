import React from 'react'
import * as cubeStyles from './cube.module.css'

function Cube() {
  return (
    <div className={cubeStyles.scene}>
      <p className={cubeStyles.placeholder}>play showreel</p>
      <div className={`${cubeStyles.cube} ${cubeStyles.front}`}>
        <p>play showreel</p>
      </div>
      <div className={`${cubeStyles.cube} ${cubeStyles.top}`}>
        <p>play showreel</p>
      </div>
      <div className={`${cubeStyles.cube} ${cubeStyles.back}`}>
        <p>play showreel</p>
      </div>
      <div className={`${cubeStyles.cube} ${cubeStyles.bottom}`}>
        <p>play showreel</p>
      </div>
    </div>
  )
}

export default Cube
