import React, { useEffect, useRef, useState } from 'react'
import { BsSearch, BsFillEmojiSmileFill, BsFileEarmarkFill, BsPlusCircleFill } from "react-icons/bs"
import { IoChatbubbleEllipsesSharp, IoCall, IoVideocam, IoEllipsisHorizontal } from "react-icons/io5"
import { HiArchiveBox } from "react-icons/hi2";
import { HiPencilAlt } from "react-icons/hi";
import { MdVideoCall } from "react-icons/md";

import { FaThumbsUp, FaStore } from "react-icons/fa"
import { TbMessageCircle2Filled } from "react-icons/tb"

import "./App.scss"

// creating components -> data needed (state management -> backend)`
const useDynamicHeightTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "40px"
      const scrollHeight = textAreaRef.scrollHeight
      textAreaRef.style.height = scrollHeight + "px"
    }
  }, [textAreaRef, value])

}

const App = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [message, setMessage] = useState("")
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setMessage(value)
  }

  useDynamicHeightTextArea(textAreaRef.current, message)

  return (
    <div className='app'>
      <aside className='message-menu'>
        <div className="menu-left">
          <div className="menu-top">
            <div className="icon-space active">
              <TbMessageCircle2Filled size={20} className=" " />
            </div>
            <div className="icon-space">
              <FaStore size={18} className=" " />
            </div>

            <div className="icon-space">
              <IoChatbubbleEllipsesSharp size={20} className=" " />

            </div>

            <div className="icon-space">
              <HiArchiveBox size={20} className=" " />
            </div>
          </div>

          <div className="menu-bottom">

            <div className="icon-space active">
              <div className="bottom-picture"></div>
            </div>
          </div>
        </div>

        <div className="menu-right">
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
              Array(12).fill(null).map(() => <div className="menu-chat">
                <div className="chat-picture"></div>
                <div className="chat-info">
                  <h5>Convo Name</h5>
                  <p>You: I've made I've made loren ipsum made loren ipsum made loren ipsum made loren ipsum made loren ipsum</p>
                </div>
              </div>)
            }
            <div className="menu-chat active">
              <div className="chat-picture"></div>
              <div className="chat-info">
                <h5>Convo Name</h5>
                <p>You: 123 I've made ...</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className='message-window'>
        <div className="window-header">
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

        <div className="window-body">
          <div className="window-scroll">
            <p className="chat-text left">a</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
          </div>
        </div>

        <div className="window-input">
          <BsPlusCircleFill size={20} />
          <div className="input-group">
            <textarea onChange={handleTextAreaChange} ref={textAreaRef} className='input-text' rows={1} placeholder="Type a message..." />
            <BsFileEarmarkFill size={20} />
            <BsFillEmojiSmileFill size={20} />
          </div>
          <FaThumbsUp size={20} />
        </div>
      </main >
    </div >
  )
}

export default App