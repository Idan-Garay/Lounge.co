import React from 'react'
import "./MessageWindow.scss"

import WindowHeader from "../WindowHeader"
import WindowBody from "../WindowBody"
import WindowInput from "../WindowInput"

const MessageWindow = () => {

    return <main className='message-window'>
        <WindowHeader/>
        <WindowBody/>
        <WindowInput/>

        
    </main >
}

export default MessageWindow