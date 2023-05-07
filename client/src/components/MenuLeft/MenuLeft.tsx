import React from 'react'
import { IoChatbubbleEllipsesSharp} from "react-icons/io5"
import { HiArchiveBox } from "react-icons/hi2";
import { FaStore } from "react-icons/fa"
import { TbMessageCircle2Filled } from "react-icons/tb"

import "./MenuLeft.scss"

const MenuLeft = () => {
    return (
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
    )
}

export default MenuLeft