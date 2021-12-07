import { useState } from 'react'

const MessageInput = ({ onSubmit, input, setInput }) => {
    return (
        <div className='message-send'>
            <form onSubmit={onSubmit} className='message-send'>
                <input className='message-input' type='text' placeholder='Message' value={input} onChange={(e) => setInput(e.target.value)} />
                <input className='message-btn' type='submit' value='Send' />
            </form>
        </div>
    )
}

export default MessageInput
