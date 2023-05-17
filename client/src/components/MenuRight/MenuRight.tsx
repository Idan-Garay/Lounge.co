import React, { useEffect, useMemo, useState } from 'react'
import "./MenuRight.scss"
import { HiPencilAlt } from "react-icons/hi";
import { MdVideoCall } from "react-icons/md";

import ChatBox from "../ChatBox"
import { socket } from '../../socket';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { changeUser } from '../../../features/messaging/messagingSlice';
import { Message, User } from '../../../types';

export default function () {
    const user = useSelector((state: RootState) => {
        let user: User = state.messaging.user
        if (!user) {
            user = {
                id: "-1",
                username: "",
                isOnline: true,
                hasNewMessages: false,
                messages: []
            }
        }
        return user
    })

    const users = useSelector((state: RootState) => {
        return state.messaging.users
    })

    const toUserId = useSelector((state: RootState) => state.messaging.toUserId)

    return <div className="menu-right">
        <div className="menu-header">
            <h3 className="header-left">Chats</h3>
            <div className="header-right">
                <MdVideoCall size={22} />
                <HiPencilAlt size={20} />
            </div>
        </div>

        <input type="text" name="" id="" className="menu-search" placeholder="🔍 Search (⌘K)" />

        <div className="menu-compose">
            <HiPencilAlt size={22} />
        </div>

        <div className="menu-body">
            {
                users.length
                    ? users.map((user, index) => {
                        return <ChatBox user={user} key={index} isSelected={user.id === toUserId}  />
                    })
                    : <ChatBox user={user} isSelected={true} />
            }
        </div>
    </div>
}