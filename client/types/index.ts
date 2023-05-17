export interface User {
    id: string
    username: string
    isOnline: boolean
    messages: Message[]
    hasNewMessages: boolean
}

export interface Message {
    fromUserId: string
    toUserId: string
    text: string
}
