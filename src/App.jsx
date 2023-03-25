import React from 'react'
import './App.css'
import Cursor from './providers/Cursor/Cursor'
import Background from './components/Background/Background'
import Header from './components/Header/Header'

import { CursorContext } from './Contexts'

const { useState } = React

function App() {
  const [cursor, setCursor] = useState('')

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      <Background />
      <Header />
      <Cursor />
    </CursorContext.Provider>
  )
}

export default App
