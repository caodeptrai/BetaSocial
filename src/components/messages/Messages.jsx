import React from 'react';
import { messages } from '../../data';
import Message from '../message/Message';
import './Messages.scss';

const Messages = () => {
    return (
        <div className="messages">
            {messages.map((m) => (
                <Message message={m} key={m.id} />
            ))}
        </div>
    );
};

export default Messages;
