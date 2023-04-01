import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BookMarkIcon, OptionIcon, SettingIcon, TableCellsIcon } from '../../components/iconSvg';
import { AppContext } from '../../contexts/AppContext';

import './Profile.scss';
const Profile = () => {
    const [toggleState, setToggleState] = useState(1);

    const { userInfo } = useContext(AppContext);
    const [isFollow, setIsFollow] = useState(false);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const handleFollow = () => {
        setIsFollow(!isFollow);
    };

    console.log({ userInfo });
    return (
        <div className="profile">
            <div className="profileContainer">
                <div className="profileInfo">
                    <div className="leftInfo">
                        <img src={userInfo?.photoURL} alt="" />
                    </div>
                    <div className="rightInfo">
                        <div className="infoTop">
                            <span className="nickname">{userInfo?.user_name}</span>
                            {userInfo.id === '9fdc8d87-9f71-4774-bbfd-d2be06b1d9fe' ? (
                                <>
                                    <button className="editProfileBtn">Edit profile</button>
                                    <button className="settingProfileBtn">
                                        <SettingIcon />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="followProfileBtn" onClick={() => setIsFollow(!isFollow)}>
                                        {isFollow ? `Followed` : `Follow`}
                                    </button>
                                    <button className="settingProfileBtn">
                                        <OptionIcon />
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="infoCenter">
                            <div className="infoCenterItem">
                                <span>{userInfo.posted}</span> posts
                            </div>

                            <div className="infoCenterItem">
                                <span>{userInfo.follow}</span> followers
                            </div>
                            <div className="infoCenterItem">
                                Following <span>{userInfo.following}</span> users
                            </div>
                        </div>
                        <div className="infoBottom">
                            <span>{userInfo.full_name}</span>
                        </div>
                    </div>
                </div>
                <div className="profileNavbar">
                    <NavLink
                        to={`/profile/${userInfo.user_name}`}
                        className={toggleState === 1 ? 'profileNavbarLink isActive' : 'profileNavbarLink'}
                        onClick={() => toggleTab(1)}
                    >
                        <TableCellsIcon />
                        POST
                    </NavLink>
                    <NavLink
                        to={`/profile/${userInfo.user_name}/saved`}
                        className={toggleState === 2 ? 'profileNavbarLink isActive' : 'profileNavbarLink'}
                        onClick={() => toggleTab(2)}
                    >
                        <BookMarkIcon height={18} width={18} />
                        SAVED
                    </NavLink>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Profile;
