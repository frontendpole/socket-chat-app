import React from 'react';
import './Input.scss';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="Form">
      <input
        className="Form--input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
      <button className="Form--sendButton" onClick={e => sendMessage(e)}>send</button>
    </form>
  )
}

export default Input;