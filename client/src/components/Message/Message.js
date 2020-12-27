import React, { useState } from 'react';
import ReactEmoji from 'react-emoji';
import './Message.scss';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return (

    isSentByCurrentUser ? (
      <div className="Message--container justifyEnd" >
        <p className="Message--sentText pr-10">{trimmedName}</p>
        <div className="Message--box backgroundGreen">
          <p className="Message--text colorWhite">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    )
      : (
        <div className="Message--container justifyStart" >
          <div className="Message--box backgroundLight">
            <p className="Message--text colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="Message--sentText pl-10">{user}</p>
        </div>
      )
  )
}

export default Message;