const Message = ({ author, content }) => {
    return (
        <div className="message">
            <p>{author}</p>
            <p>{content}</p>
        </div>
    )
}

export default Message
