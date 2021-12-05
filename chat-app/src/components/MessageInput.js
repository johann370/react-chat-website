const MessageInput = () => {
    return (
        <form className="message-send">
            <input className="message-input" type="text" placeholder="Message" />
            <input className="message-btn" type="submit" value="Send" />
        </form>
    )
}

export default MessageInput
