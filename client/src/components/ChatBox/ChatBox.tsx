import React, { useState } from 'react'

import "./ChatBox.scss"
import { User } from '../../../types'
import { useDispatch } from 'react-redux'
import { changeToUserId } from '../../../features/messaging/messagingSlice'


interface ChatBoxProps {
    user: User
    isSelected: boolean
}

const ChatBox = ({user, isSelected}: ChatBoxProps) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        console.log('handleClick', user)
        dispatch(changeToUserId(user.id))
    }

    return (
        <div className="menu-chat" data-selected={isSelected} onClick={handleClick}>
            <div className="chat-picture"></div>
            <div className="chat-info">
                <h5>{user.username} - {user.isOnline ? "online": ""}</h5>
                <p>You: I've made I've made loren ipsum made loren ipsum made loren ipsum made loren ipsum made loren ipsum</p>
            </div>
        </div>
    )
}

export default ChatBox