import React, { useRef } from 'react';

import './Message.scss';

const Message = ({ message }) => {
    const ref = useRef();

    return (
        <div className="messageWrap">
            <div
                ref={ref}
                className={`message ${message.senderId === '9fdc8d87-9f71-4774-bbfd-d2be06b1d9fe' && 'owner'}`}
            >
                <div className="messageInfo">
                    <img src={message.senderImg} alt="" />
                </div>
                <div className="messageContent">
                    <p className="text">{message.text}</p>
                    {message?.image && <img src={message.image} alt="" />}
                    <span className="messageTime">{message.time}</span>
                </div>
            </div>
        </div>
    );
};

export default Message;
