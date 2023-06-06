import ChatBox from "./ChatBox"
import { MockState } from "../../../features/messaging/messagingSliceMock"
// import component
// export default stories Interface {component, title}
// export individual story {args: {...props}}

export default {
    component: ChatBox,
    title: 'ChatBox'
}

export const Selected = {
    args: {
        user: MockState.user,
        isSelected: true
    } 
}

export const NotSelected = {
    args: {
        user: MockState.user,
        isSelected: false
    }
}

export const HasNewMessages = {
    args: {
        user: {...MockState.user, hasNewMessages: true},
        isSelected: false
    }
}