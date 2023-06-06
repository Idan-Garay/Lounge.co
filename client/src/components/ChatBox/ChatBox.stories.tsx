import { Provider } from "react-redux"
import ChatBox from "./ChatBox"
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit"
import React from "react"
import { MockStore, MockState } from "../../../features/messaging/messagingSliceMock"
// import component
// export default stories Interface {component, title}
// export individual story {args: {...props}}

export default {
    component: ChatBox,
    title: 'ChatBox'
}

export const Selected = {
    decorators: [(story) => <MockStore state={MockState}>{story()}</MockStore>],
    args: {
        user: MockState.user,
        isSelected: true
    } 
}

export const NotSelected = {
    decorators: [(story) => <MockStore state={MockState}>{story()}</MockStore>],
    args: {
        user: MockState.user,
        isSelected: false
    }
}

export const HasNewMessages = {
    decorators: [(story) => <MockStore state={MockState}>{story()}</MockStore>],
    args: {
        user: {...MockState.user, hasNewMessages: true},
        isSelected: false
    }
}