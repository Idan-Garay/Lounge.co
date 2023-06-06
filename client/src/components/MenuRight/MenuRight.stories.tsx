import React from "react"
import { MockState, MockStore } from "../../../features/messaging/messagingSliceMock"
import MenuRight from "./MenuRight"

export default {
    component: MenuRight,
    title: 'MenuRight',
}

export const Default = {
    decorators: [(story) => <MockStore state={MockState}>{story()}</MockStore>],
}