import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { degToRad } from 'three/src/math/MathUtils'

import * as backgroundStyles from './background.module.css'

// const { useState } = React
const { useRef } = React

function MyRotatingBox() {
  const myMesh = useRef()
  const linesColor = '#313131'

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    myMesh.current.rotation.x = degToRad(90) + degToRad(5) * Math.sin(a / 2)
    myMesh.current.position.z = degToRad(30) * degToRad(30) * Math.cos(a / 2)
  })

  return (
    <gridHelper
      ref={myMesh}
      args={[17, 10]}
      color={linesColor}
      rotation={[Math.PI / 2, 0, 0]}
    />
  )
}

function Background() {
  return (
    <div className={backgroundStyles.background}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <MyRotatingBox />
      </Canvas>
    </div>
  )
}

export { Background }
