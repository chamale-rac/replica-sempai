import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import PropTypes from 'prop-types'

import * as backgroundStyles from './background.module.css'

// const { useState } = React
const { useRef } = React

function MyRotatingGrid() {
  const myMesh = useRef()
  const linesColor = '#313131'

  const myDegToRad = (deg) => deg * (Math.PI / 180)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    myMesh.current.rotation.x = myDegToRad(90) + myDegToRad(5) * Math.sin(a / 2)
    myMesh.current.position.z =
      myDegToRad(30) * myDegToRad(30) * Math.cos(a / 2)
  })

  return (
    <gridHelper
      ref={myMesh}
      args={[17, 13]}
      color={linesColor}
      rotation={[Math.PI / 2, 0, 0]}
    />
  )
}

function Background({ children }) {
  return (
    <>
      <div className={`container ${backgroundStyles.container}`}>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <MyRotatingGrid />
        </Canvas>
      </div>
      {children}
    </>
  )
}
Background.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Background
