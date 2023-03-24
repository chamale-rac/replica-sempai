import React from 'react'
import './App.css'
import { Background } from './components/Background/Background'
import { Header } from './components/Header/Header'

// const { useState } = React

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
    </div>
  )
}

export default App
