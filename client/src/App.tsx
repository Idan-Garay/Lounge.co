import React, { useEffect, useState } from 'react'
import "./App.scss"

import MessageMenu from "./components/MessageMenu"
import MessageWindow from "./components/MessageWindow"

import { socket } from "./socket"
import { useDispatch, useSelector } from 'react-redux'
import { addUserToUsers, changeUser, changeUsers, userDisconnect } from '../features/messaging/messagingSlice'
import { Message, User } from '../types'
import { RootState } from './app/store'

const App = () => {
  const dispatch = useDispatch()
  const myUser = useSelector((state:RootState) => state.messaging.user)

  useEffect(() => {
    const username = prompt("Enter username:")
    const user: User = {id: "-1", username: username, isOnline: true, messages: [], hasNewMessages: false, profileImage: "https://images.pexels.com/photos/2078467/pexels-photo-2078467.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2", messageOverview: "You: I've made I've made loren ipsum made loren ipsum made loren ipsum made loren ipsum made loren ipsum",lastMessageDate: "4:25 PM",}
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

    socket.on("user disconnect", (userId) => {
      dispatch(userDisconnect(userId))
    })

    return () => {
      socket.off("users")
      socket.off("connect_error")
      socket.off("user disconnect")
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