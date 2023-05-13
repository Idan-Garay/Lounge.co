import React, { useEffect, useState } from 'react'
import "./WindowBody.scss"

import { useSelector } from 'react-redux'
import {RootState} from "../../app/store"
import { Message } from '../../../types'


export default function () {
    const stateUserId = useSelector((state: RootState) => {
        const id = state.messaging.user? state.messaging.user.id: -1
        return id
    })

    const currentChatHistory = useSelector((state:RootState) => {
        const {inbox, inboxIndex} = state.messaging
        if (inboxIndex !== -1) {
            return inbox[inboxIndex]
        }

        return null
    })


    return <div className="window-body">
        <div className="window-scroll">
            <p className="chat-text left">a</p>
            {
                currentChatHistory
                ? currentChatHistory.messages.map((message: Message, index: number) => <ChatMessage key={index} message={message} stateUserId={stateUserId}/>)
                : null
            }
        </div>
    </div>
}

const ChatMessage = ({message, stateUserId}: {message: Message, stateUserId: number}) => {
    return message.fromUserId === stateUserId
    ?<p className="chat-text right">{message.text}</p>
    :<p className="chat-text left">{message.text}</p>
}