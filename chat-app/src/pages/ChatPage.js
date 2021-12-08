import React, { useState, useEffect } from 'react'
import ChatBox from '../components/ChatBox'
import Members from '../components/Members'
import Navbar from '../components/Navbar'
import ServerSelect from '../components/ServerSelect'

const ChatPage = ({ url, loggedIn, setLoggedIn }) => {
    const [messages, setMessages] = useState([]);
    const [servers, setServers] = useState([]);
    const [selectedServer, setSelectedServer] = useState();
    const [members, setMembers] = useState([]);
    const [input, setInput] = useState("");
    const [chatUpdated, setChatUpdated] = useState(false);

    setLoggedIn(localStorage.getItem('loggedIn'));

    useEffect(() => {
        if (selectedServer || chatUpdated) {
            fetch(`${url}/messages/${selectedServer}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            })
                .then(response => response.json())
                .then(data => {
                    setMessages(data);
                })
                .finally(() => {
                    setChatUpdated(false);
                    var element = document.getElementsByClassName('messages');
                    element[0].scrollTop = element[0].scrollHeight;
                })
        }
    }, [selectedServer, chatUpdated])

    useEffect(async () => {
        const user_id = sessionStorage.getItem('user_id');
        const response = await fetch(`${url}/users/${user_id}/servers`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
        })
        const data = await response.json();
        setServers(data);
    }, [])

    useEffect(async () => {
        if (selectedServer) {
            const response = await fetch(`${url}/servers/${selectedServer}/members`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            })
            const data = await response.json();
            setMembers(data);
        }
    }, [selectedServer])

    const sendMessage = async (e) => {
        e.preventDefault();
        if (selectedServer) {
            const response = await fetch(`${url}/messages/${selectedServer}`, {
                method: "POST",
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'content': input })
            })
            const data = await response.json();
            setInput("");
            setChatUpdated(true);
        }
    }


    return (
        <div>
            <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            {servers && <ServerSelect servers={servers} selectedServer={selectedServer} setSelectedServer={setSelectedServer} />}
            <div className='chat-page-content'>
                {members && <Members members={members} />}
                {servers && < ChatBox messages={messages} onSubmit={sendMessage} input={input} setInput={setInput} />}
            </div>
        </div>
    )
}

export default ChatPage
