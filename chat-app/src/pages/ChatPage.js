import React from 'react'
import ChatBox from '../components/ChatBox'
import Members from '../components/Members'
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

    const members = [
        {
            "username": "user"
        },
        {
            "username": "john"
        },
        {
            "username": "tom"
        },
        {
            "username": "random123"
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

            <div className="chat-page-content">
                <Members members={members} />
                <ChatBox messages={messages} />
            </div>
        </div>
    )
}

export default ChatPage
