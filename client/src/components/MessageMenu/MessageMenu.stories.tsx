import React from "react"
import MessageMenu from "./MessageMenu"
import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { MockState, MockStore } from "../../../features/messaging/messagingSliceMock"


export default {
    component: MessageMenu,
    title: "MessageMenu",
    decorators: [
        (story) => <MockStore state={MockState}>{story()}</MockStore>
    ]
}

export const Default = () => <MessageMenu />