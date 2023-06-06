import React from "react"
import MenuLeft from "./MenuLeft"
import { MockStore, MockState } from "../../../features/messaging/messagingSliceMock"

export default {
    component: MenuLeft,
    title: "MenuLeft",
}



export const Default = {
    decorators: [(story) => <MockStore state={MockState}>{story()}</MockStore>]
}