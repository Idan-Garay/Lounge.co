import React, { useEffect, useRef, useState } from 'react'
import { IoChatbubbleEllipsesSharp } from "react-icons/io5"
import { HiArchiveBox } from "react-icons/hi2";
import { FaStore } from "react-icons/fa"
import { TbMessageCircle2Filled } from "react-icons/tb"
import { MdSettings } from "react-icons/md"

import "./MenuLeft.scss"
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

const MenuLeft = () => {
    const profileImage = useSelector((state: RootState) => state.messaging.user.profileImage ?? "https://images.pexels.com/photos/2078467/pexels-photo-2078467.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2")
    const settingsElemRef = useRef<HTMLDivElement>(null)
    const [toggleSettings, setToggleSettings] = useState(false)
    const [currentItem, setCurrentItem] = useState("item 1")
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setCurrentItem(e.currentTarget.dataset.itemName)
    }
    const handleToggleSettings = () => {
        setToggleSettings((toggleSettings) => !toggleSettings)
    }

    useEffect(() => {
        function handleClickOutside(event:MouseEvent) {
            if (settingsElemRef.current && !settingsElemRef.current.contains(event.target as Node)) {
                handleToggleSettings()
            }
        }
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className="menu-left">
            <div className="menu-top">
                <div className={`icon-space ${currentItem === "item 1" ? "active" : ""}`} data-item-name="item 1" onClick={handleClick}>
                    <TbMessageCircle2Filled size={20} />
                </div>
                <div className={`icon-space ${currentItem === "item 2" ? "active" : ""}`} data-item-name="item 2" onClick={handleClick}>
                    <FaStore size={18} />
                </div>

                <div className={`icon-space ${currentItem === "item 3" ? "active" : ""}`} data-item-name="item 3" onClick={handleClick}>
                    <IoChatbubbleEllipsesSharp size={20} />

                </div>

                <div className={`icon-space ${currentItem === "item 4" ? "active" : ""}`} data-item-name="item 4" onClick={handleClick}>
                    <HiArchiveBox size={20} />
                </div>
            </div>


            <div className="menu-bottom" ref={settingsElemRef}>
                <div className={`settings ${toggleSettings ? "" : "display-none"}`} >
                    <div className="settings-background">
                        <MdSettings size={20} />
                        <p><b>Preferences</b></p>
                    </div>
                </div>
                <div className="icon-space active" onClick={handleToggleSettings}>
                    <img src={profileImage} alt="profile" className="bottom-picture" />
                </div>
            </div>
        </div>
    )
}

export default MenuLeft