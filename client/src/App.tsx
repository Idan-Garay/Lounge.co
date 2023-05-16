import React, { useEffect, useState } from 'react'
import "./App.scss"

import MessageMenu from "./components/MessageMenu"
import MessageWindow from "./components/MessageWindow"

import { socket } from "./socket"
import { useDispatch, useSelector } from 'react-redux'
import { addUserToUsers, changeUser, changeUsers } from '../features/messaging/messagingSlice'
import { Message, User } from '../types'
import { RootState } from './app/store'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const username = prompt("Enter username:")
    const user: User = {id: -1, username: username, isOnline: true, messages: [], hasNewMessages: false}
    socket.auth = {user}
    socket.connect()

    socket.on("users", (users: User[], myUser: User) => {
      dispatch(changeUsers(users))
      dispatch(changeUser(myUser))
    })

    socket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        console.log('error', err)
      }
    });

    return () => {
      socket.off("users")
      socket.off("connect_error")
    }
  }, [])

  useEffect(() => {
    socket.on("user connected", (userConnected) => {
      dispatch(addUserToUsers(userConnected))
    })
  }, [])

  return (
    <div className='app'>
      <MessageMenu />
      <MessageWindow />
    </div >
  )
}

export default App