import React from 'react'
import * as cubeStyles from './cube.module.css'

function Cube() {
  return (
    <div className={cubeStyles.scene}>
      <div className={cubeStyles.cube_container}>
        <div className={`${cubeStyles.cube_face} ${cubeStyles.front}`}>
          <p>play showreel</p>
        </div>
        <div className={`${cubeStyles.cube_face} ${cubeStyles.top}`}>
          <p>play showreel</p>
        </div>
        <div className={`${cubeStyles.cube_face} ${cubeStyles.back}`}>
          <p>play showreel</p>
        </div>
        <div className={`${cubeStyles.cube_face} ${cubeStyles.bottom}`}>
          <p>play showreel</p>
        </div>
      </div>
      <p className={cubeStyles.placeholder}>play showreel</p>
    </div>
  )
}

export default Cube
