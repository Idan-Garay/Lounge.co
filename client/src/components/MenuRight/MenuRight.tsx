import React, { useEffect, useState } from 'react'
import "./MenuRight.scss"
import { HiPencilAlt } from "react-icons/hi";
import { MdVideoCall } from "react-icons/md";

import ChatBox from "../ChatBox"
import { socket } from '../../socket';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addToInbox, logout } from '../../../features/messaging/messagingSlice';
import { User } from '../../../types';

export default function () {
    const inbox = useSelector((state:RootState) => state.messaging.inbox)
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on("user-connects", (arg: User) => {
            dispatch(addToInbox(arg))
        })

        socket.on("user-disconnect", (arg: User) => {
            dispatch(logout(arg))
        })

        return () => {
            socket.off("user-connects")
            socket.off("user-disconnect")
        }
    }, [inbox])
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
                inbox.length
                ? inbox.map((item, index) => <ChatBox user={item} key={index} />)
                : <ChatBox user={{username: "Convo Name", isOnline: true}} />
            }
        </div>
    </div>
}