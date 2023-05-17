import React, { useEffect, useState } from 'react'
import "./WindowBody.scss"

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../app/store"
import { Message, User } from '../../../types'
import { socket } from '../../socket'
import { receiveMessage } from '../../../features/messaging/messagingSlice'

export default function () {
    const selectedUser = useSelector((state: RootState) => {
        const messagingState = state.messaging
        
        return messagingState.users.find(user => user.id === messagingState.toUserId)
    })
    const stateUserId = useSelector((state: RootState) => {
        const user = state.messaging.user
        return user ? user.id : null
    })
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on("private message", (message: Message) => {
            dispatch(receiveMessage(message))
        })  
    }, [])
    
    return <div className="window-body">
        <div className="window-scroll">
            {
                selectedUser
                    ? selectedUser.messages.map((message: Message, index: number) => <ChatMessage key={index} message={message} stateUserId={stateUserId} />)
                    : null
            }
        </div>
    </div>
}

const ChatMessage = ({ message, stateUserId }: { message: Message, stateUserId: string }) => {
    return message.fromUserId === stateUserId
        ? <p className="chat-text right">{message.text}</p>
        : <p className="chat-text left">{message.text}</p>
}