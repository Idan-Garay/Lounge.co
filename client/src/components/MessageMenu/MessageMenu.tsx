import React from 'react'
import "./MessageMenu.scss"

import MenuLeft from "../MenuLeft"
import MenuRight from "../MenuRight"

const MessageMenu = () => {
    return (
        <aside className='message-menu'>
            <MenuLeft/>
            <MenuRight/>
        </aside>
    )
}

export default MessageMenu