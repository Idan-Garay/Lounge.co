import React, { useState } from 'react'

import "./ChatBox.scss"
import { User } from '../../../types'
import { useDispatch } from 'react-redux'
import { changeToUserId } from '../../../features/messaging/messagingSlice'


interface ChatBoxProps {
    user: User
    isSelected: boolean
}

const ChatBox = ({ user, isSelected }: ChatBoxProps) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(changeToUserId(user.id))
    }

    return (
        <div className="menu-chat" data-selected={isSelected} onClick={handleClick}>
            <img src={user.profileImage} alt="profile" className="chat-avatar" />
            <div className="chat-info">
                <h5>{user.username}</h5>
                <div className="overview">
                    <p className="overview-message">{user.messageOverview}</p>
                    <p className="overview-interpunct">·</p>
                    <p className="overview-date">{user.lastMessageDate}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatBox