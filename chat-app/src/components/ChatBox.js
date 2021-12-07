import Message from './Message'
import MessageInput from './MessageInput'

const ChatBox = ({ messages, onSubmit, input, setInput }) => {

    return (
        <div className='chat'>
            <div className='messages'>
                {messages.map((message) => (
                    <Message author={message.author.username} content={message.content} />
                ))}
            </div>

            <MessageInput onSubmit={onSubmit} input={input} setInput={setInput} />
        </div>
    )
}

export default ChatBox
