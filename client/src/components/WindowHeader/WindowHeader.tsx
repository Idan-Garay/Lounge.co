import React from 'react'
import "./WindowHeader.scss"
import { BsSearch } from "react-icons/bs"
import { IoCall, IoVideocam, IoEllipsisHorizontal } from "react-icons/io5"

export default function () {
    return <div className="window-header">
        <div className="header-info">
            <div className="info-picture"></div>
            <h4>Conversation Name</h4>
        </div>

        <div className="header-buttons">
            <IoCall size={20} />
            <IoVideocam size={22} />
            <BsSearch size={18} />
            <IoEllipsisHorizontal />
        </div>

    </div>
}