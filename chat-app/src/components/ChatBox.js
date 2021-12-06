import Message from './Message'
import MessageInput from './MessageInput'

const ChatBox = ({ messages }) => {
    return (
        <div className='chat'>
            {
                messages.map((message) => (
                    <Message author={message.author} content={message.content} />
                ))
            }
            <MessageInput />
        </div>
    )
}

export default ChatBox
