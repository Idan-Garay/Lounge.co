import React, { useEffect, useState } from 'react'
import "./App.scss"

import MessageMenu from "./components/MessageMenu"
import MessageWindow from "./components/MessageWindow"

import { socket } from "./socket"
import { useDispatch, useSelector } from 'react-redux'
import { changeUser, fillInbox, updateInbox } from '../features/messaging/messagingSlice'
import { ChatHistory, User } from '../types'
import { RootState } from './app/store'

const App = () => {
  const stateUser = useSelector((state: RootState) => state.messaging.user)
  const inbox = useSelector((state: RootState) => state.messaging.inbox)
  const dispatch = useDispatch()

  useEffect(() => {
    const name = prompt("Enter username: ")
    const user: User = { id: -1, username: name, isOnline: true }

    socket.connect()
    socket.emit("connect user", user)

    socket.on("users", (users: User[], myUser) => {
      const chatHistories: ChatHistory[] = users.map(user => {
        const chatHistory: ChatHistory = { from: myUser, to: user, messages: [] }
        return chatHistory
      })

      dispatch(fillInbox(chatHistories))
      dispatch(changeUser(myUser))
    })

    return () => {
      socket.off("users")
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    socket.on("user connected", (userConnected: User) => {
      const me = inbox.length? inbox[0].from: null
      
      console.log('here 22', stateUser, inbox)
      dispatch(updateInbox({ from: me, to: userConnected, messages: [] }))
    })

    return () => {
      socket.off("user connected")

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