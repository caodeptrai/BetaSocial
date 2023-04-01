import React from 'react';
import AccountItem from '../../components/accountItem/AccountItem';
import Posts from '../../components/posts/Posts';
import PostShare from '../../components/postShare/PostShare';

import { users } from '../../data';
import './Home.scss';
const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <div className="left">
                    <PostShare />
                    <Posts />
                </div>
                <div className="right">
                    <AccountItem item={users[0]} />
                    <div className="suggestions">
                        <h5>Suggestions for you</h5>
                        <span className="seeAll">See all</span>
                    </div>
                    <div>
                        {users.map((user) => (
                            <AccountItem item={user} key={user.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
