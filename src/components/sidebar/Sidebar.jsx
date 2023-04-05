import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import Search from '../search/Search';
import { AppContext } from '../../contexts/AppContext';
import { Popover } from 'antd';
import {
    ActivityIcon,
    BarActiveIcon,
    BarIcon,
    BellActiveIcon,
    BellIcon,
    BookMarkIcon,
    DarkModeIcon,
    ExploreActiveIcon,
    ExploreIcon,
    HomeActiveIcon,
    HomeIcon,
    MessageActiveIcon,
    MessageIcon,
    ReelsActiveIcon,
    ReelsIcon,
    ReportIcon,
    SearchActiveIcon,
    SearchIcon,
    SettingIcon,
} from '../iconSvg';
import Notification from '../notification/Notification';
import { users } from '../../data';

const Sidebar = () => {
    const [toggleState, setToggleState] = useState(1);
    const {
        toggleSidebar,
        setToggleSidebar,
        openSearch,
        setOpenSearch,
        openNotification,
        setOpentNotification,
        setUserInfo,
    } = useContext(AppContext);

    const [darkmode, setDarkmode] = useState(false);
    const toggleTab = (index) => {
        setToggleState(index);
        setToggleSidebar(false);
    };

    const OpenSearch = (index) => {
        setToggleState(index);

        if (openNotification) {
            setOpenSearch(true);
            setToggleSidebar(true);
            setOpentNotification(false);
        } else {
            setToggleSidebar(!toggleSidebar);
            setOpenSearch(!openSearch);
        }
    };

    const OpenNotification = (index) => {
        setToggleState(index);

        if (openSearch) {
            setToggleSidebar(true);
            setOpentNotification(true);
            setOpenSearch(false);
        } else {
            setToggleSidebar(!toggleSidebar);
            setOpentNotification(!openNotification);
        }
    };

    const getUserInfor = (index) => {
        setToggleState(index);
        setUserInfo(users[0]);
    };

    const content = (
        <div className="popperContent">
            <div className="popperItem">
                Setting
                <SettingIcon />
            </div>
            <hr className="divider" />
            <div className="popperItem">
                Your activites
                <ActivityIcon />
            </div>
            <hr className="divider" />
            <div className="popperItem">
                Saved
                <BookMarkIcon height={24} width={24} />
            </div>
            <hr className="divider" />
            <div className="popperItem" onClick={() => setDarkmode(!darkmode)}>
                Switch mode
                <DarkModeIcon />
            </div>
            <hr className="divider" />
            <div className="popperItem" style={{ marginBottom: 4 }}>
                Report problem
                <ReportIcon />
            </div>

            <div className="popperItem">Account transfer</div>
            <hr className="divider" />
            <div className="popperItem">Log out</div>
        </div>
    );

    return (
        <div className={toggleSidebar ? ' sidebar sidebarSm isSmall' : 'sidebar sidebarSm'}>
            <div className={toggleSidebar ? ' sidebarContainer isSmall' : 'sidebarContainer'}>
                <div className="contentTop">
                    <div className="logoXl">
                        {toggleSidebar ? (
                            <div className="logo ">
                                <h1>B</h1>
                                <span className="dot">.</span>
                            </div>
                        ) : (
                            <div className="logo  ">
                                <h1>BetaSocial</h1>
                                <span className="dot">.</span>
                            </div>
                        )}
                    </div>

                    <div className="logoSm">
                        <div className="logo logo-1">
                            <h1>B</h1>
                            <span className="dot">.</span>
                        </div>
                    </div>
                    <ul className="content">
                        <li className="item" onClick={() => toggleTab(1)}>
                            <Link className={toggleState === 1 ? 'link  active' : 'link '} to="/">
                                {toggleState === 1 ? <HomeActiveIcon /> : <HomeIcon />}

                                <span className={toggleSidebar ? 'title titleSmall' : 'title'}>Home</span>
                            </Link>
                        </li>
                        <li className="item" onClick={() => OpenSearch(2)}>
                            <div className="searchItem">
                                {toggleState === 2 ? <SearchActiveIcon /> : <SearchIcon />}

                                <span className={toggleSidebar ? 'title titleSmall' : 'title'}>Search</span>
                            </div>
                        </li>
                        <li className="item" onClick={() => toggleTab(3)}>
                            <Link className={toggleState === 3 ? 'link  active' : 'link '} to="/explore">
                                {toggleState === 3 ? <ExploreActiveIcon /> : <ExploreIcon />}

                                <span className={toggleSidebar ? 'title titleSmall' : 'title'}>Explore</span>
                            </Link>
                        </li>
                        <li className="item" onClick={() => toggleTab(4)}>
                            <Link className={toggleState === 4 ? 'link  active' : 'link '} to="/reels">
                                {toggleState === 4 ? <ReelsActiveIcon /> : <ReelsIcon />}
                                <span className={toggleSidebar ? 'title titleSmall' : 'title'}>Reels</span>
                            </Link>
                        </li>
                        <li className="item" onClick={() => toggleTab(5)}>
                            <Link className={toggleState === 5 ? 'link active' : 'link '} to="/inbox">
                                {toggleState === 5 ? <MessageActiveIcon /> : <MessageIcon />}
                                <span className={toggleSidebar ? 'title titleSmall' : 'title'}>Message</span>
                            </Link>
                        </li>

                        <li className="item" onClick={() => OpenNotification(6)}>
                            <div className="notify">
                                {toggleState === 6 ? <BellActiveIcon /> : <BellIcon />}

                                <span className={toggleSidebar ? 'title titleSmall' : 'title'}>Notification</span>
                            </div>
                        </li>
                        <li className="item" onClick={() => getUserInfor(8)}>
                            <Link className={toggleState === 8 ? 'link active' : 'link'} to={`/profile/duongcao304`}>
                                <img
                                    src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/308476054_1103307597057379_870838083421102790_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qWAm-872ZOUAX-1SZdz&_nc_ht=scontent.fhan15-1.fna&oh=00_AfA8KyBVxM_cS1RkNBse-k-XhhU9Wi-hOPDUGg4fg6tXGg&oe=6428C1DB"
                                    alt=""
                                />
                                <span className={toggleSidebar ? 'title titleSmall' : 'title'}> Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Popover content={content} placement="top" trigger="click">
                    <div
                        className={toggleState === 9 ? ' item itemMore active' : ' item itemMore'}
                        onClick={() => toggleTab(9)}
                    >
                        <div className="more">
                            {toggleState === 9 ? <BarActiveIcon /> : <BarIcon />}

                            <span className={toggleSidebar ? 'title titleSmall' : 'seeMore title'}>More</span>
                        </div>
                    </div>
                </Popover>
            </div>
            <Search />
            <Notification />
        </div>
    );
};

export default Sidebar;
