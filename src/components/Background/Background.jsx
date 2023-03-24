import React from 'react'
import { Canvas } from '@react-three/fiber'
import * as backgroundStyles from './background.module.css'

function Background() {
  return (
    <div className={backgroundStyles.background}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <gridHelper
          args={[20, 20, 0xff0000, 'teal']}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </Canvas>
    </div>
  )
}

export { Background }
