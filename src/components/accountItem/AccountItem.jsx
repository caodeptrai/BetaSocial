import { Avatar } from 'antd';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';
// import { AuthContext } from '../../contexts/AuthContext';

import './AccountItem.scss';

const AccountItem = ({ item }) => {
    const { setUserInfo, setOnwer } = useContext(AppContext);
    // const { currentUser } = useContext(AuthContext);
    const handleShowUserInfo = (data) => {
        setUserInfo(data);
        // if (item.id !== currentUser.uid) {
        //     setOnwer(true);
        // }

        console.log('ssf', { data });
    };

    return (
        <Link to={`/profile/${item.user_name}`} className="accountItem" onClick={() => handleShowUserInfo(item)}>
            <div className="accountItemContainer">
                <div className="itemWrapperLeft">
                    <Avatar size={32} src={item.photoURL} />
                    <div className="wrapper">
                        <span className="title">{item.user_name}</span>
                        <span className="decs">{`There are ${item.follow} followers`}</span>
                    </div>
                </div>
                <div className="itemWrapperRight">
                    <button>Follow</button>
                </div>
            </div>
        </Link>
    );
};

export default AccountItem;
