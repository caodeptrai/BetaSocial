import React from 'react';
import './Card.scss';
const Card = ({ item }) => {
    return (
        <div className="card">
            <img className="cardAvatar" size={56} src={item.photoURL} alt="" />
            <span>{item.nickname}</span>
        </div>
    );
};

export default Card;
