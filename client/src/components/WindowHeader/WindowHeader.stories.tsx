import React from "react"
import WindowHeader from "./WindowHeader"
import { MockState, MockStore } from "../../../features/messaging/messagingSliceMock"

export default {
    component: WindowHeader,
    title: "WindowHeader",
}

export const Default = {
    decorators: [
        (story) => <MockStore state={{...MockState, toUserId: "2"}}>{story()}</MockStore>
    ]
}

export const SameUser = {
    decorators: [
        (story) => <MockStore state={{...MockState, toUserId: "1"}}>{story()}</MockStore>
    ]
}