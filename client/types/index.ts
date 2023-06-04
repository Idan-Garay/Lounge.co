export interface User {
    id: string
    username: string
    profileImage: string
    isOnline: boolean
    messageOverview: string
    messages: Message[]
    hasNewMessages: boolean
    lastMessageDate: string
}

export interface Message {
    fromUserId: string
    toUserId: string
    text: string
}
