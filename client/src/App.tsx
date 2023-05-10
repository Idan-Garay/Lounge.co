import React, { useEffect, useState } from 'react'
import "./App.scss"

import MessageMenu from "./components/MessageMenu"
import MessageWindow from "./components/MessageWindow"

import { socket } from "./socket"

const App = () => {
  const [isConnect, setIsConnected] = useState(socket.connected)
  const [fooEvents, setFooEvents] = useState([])
  const [username, setUsername] = useState("")

  useEffect(() => {
    socket.connect()
    if (!username.length) {
      const name = prompt("Enter username: ")
      setUsername(name)
      socket.emit("login", { username: name, isOnline: true }, (serverReply: string) => console.log(serverReply))
    }

    const cleanup = () => {
      socket.emit("disconnect 2", { username })

    }
    window.addEventListener('beforeunload', cleanup);


    return () => {
      window.removeEventListener("beforeunload", cleanup)
      socket.disconnect()
    }
  }, [])

  return (
    <div className='app'>
      <MessageMenu />
      <MessageWindow />
    </div >
  )
}

export default App