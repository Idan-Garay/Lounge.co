import React from 'react'

import MessageMenu from "./components/MessageMenu"
import MessageWindow from "./components/MessageWindow"

import "./App.scss"

const App = () => {

  return (
    <div className='app'>
      <MessageMenu/>
      <MessageWindow/>
    </div >
  )
}

export default App