import React from 'react'
import ChatBox from '../components/ChatBox'
import MessageInput from '../components/MessageInput'
import Navbar from '../components/Navbar'

const ChatPage = () => {
    const messages = [
        {
            "author": "user",
            "content": "first message"
        },
        {
            "author": "user",
            "content": "second message"
        },
        {
            "author": "juan",
            "content": "hello"
        },
        {
            "author": "user",
            "content": "test"
        },
    ]

    const navitems = [
        {
            "link": "/chat",
            "text": "Chat"
        }
    ]

    return (
        <div>
            <Navbar navitems={navitems} />
            <ChatBox messages={messages} />
        </div>
    )
}

export default ChatPage
