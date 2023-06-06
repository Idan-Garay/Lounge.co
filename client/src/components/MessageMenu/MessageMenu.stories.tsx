import React from "react"
import MessageMenu from "./MessageMenu"
import { MockState, MockStore } from "../../../features/messaging/messagingSliceMock"


export default {
    component: MessageMenu,
    title: "MessageMenu",
    decorators: [
        (story) => <MockStore state={MockState}>{story()}</MockStore>
    ]
}

export const Default = () => <MessageMenu />