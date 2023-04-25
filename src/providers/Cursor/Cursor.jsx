import React from 'react'
import * as cursorStyles from './cursor.module.css'

import { CursorContext } from '../../Contexts'

const { useEffect, useState, useContext } = React

function Cursor() {
  const { cursor } = useContext(CursorContext)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 })

  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event
    const factor = (distance) => {
      const scalingFactor = 0.07
      const midPoint = 30
      return 1 / (1 + Math.exp(-(scalingFactor * (distance - midPoint))))
    }

    const newX =
      prevMousePosition.x +
      (x - prevMousePosition.x) * factor(Math.abs(x - prevMousePosition.x))
    const newY =
      prevMousePosition.y +
      (y - prevMousePosition.y) * factor(Math.abs(y - prevMousePosition.y))

    requestAnimationFrame(() => {
      setMousePosition({ x: newX, y: newY })
    })

    setPrevMousePosition({ x: newX, y: newY })
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const deviation = (xy) => {
    return cursor.type === 'pointer' ? xy - 21 : xy - 15
  }

  const { x, y } = mousePosition

  return (
    <div className={cursorStyles.wrapper}>
      <div
        className={`${cursorStyles.cursor} ${cursorStyles[cursor.type]}`}
        style={{
          left: `${deviation(x) + 13}px`,
          top: `${deviation(y) + 13}px`,
        }}
      />
      <div
        className={`${cursorStyles.radius} ${cursorStyles[cursor.type]} ${
          cursorStyles.first
        } `}
        style={{
          left: `${deviation(x)}px`,
          top: `${deviation(y)}px`,
        }}
      />
      <div
        className={`${cursorStyles.radius} ${cursorStyles[cursor.type]} ${
          cursorStyles.second
        }`}
        style={{
          left: `${deviation(x)}px`,
          top: `${deviation(y)}px`,
        }}
      />
      <div
        className={`${cursorStyles.radius} ${cursorStyles[cursor.type]} ${
          cursorStyles.third
        }`}
        style={{
          left: `${deviation(x)}px`,
          top: `${deviation(y)}px`,
        }}
      />
    </div>
  )
}

export default Cursor
