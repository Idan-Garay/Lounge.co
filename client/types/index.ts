export interface User {
    id: number
    username: string
    isOnline: boolean
    messages: Message[]
    hasNewMessages: boolean
}

export interface Message {
    fromUserId: number
    toUserId: number
    text: string
}
