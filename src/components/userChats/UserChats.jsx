import { faCircle, faCircleInfo, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover } from 'antd';
import React, { useContext } from 'react';
import './UserChats.scss';
import { Link } from 'react-router-dom';
import { OptionIcon } from '../iconSvg';
import { AppContext } from '../../contexts/AppContext';

const UserChats = () => {
    const { setOpenChat } = useContext(AppContext);
    const content = (
        <div className="popperContent">
            <div className="popperItem">
                <FontAwesomeIcon className="popperIcon" icon={faUser} />
                Người liên hệ đang hoạt động
            </div>
            <div className="popperItem">
                <FontAwesomeIcon className="popperIcon" icon={faMessage} />
                Tin nhắn đang chờ
            </div>
            <div className="popperItem">
                <FontAwesomeIcon className="popperIcon" icon={faCircleInfo} />
                Trợ giúp
            </div>
        </div>
    );
    return (
        <div className="userChats">
            <div className="userChatsContainer">
                <div className="userChatsHeading">
                    <span className="userChatsTitle">Chats</span>
                    <Popover content={content} placement="bottomLeft" title="Tùy chọn" trigger="click">
                        <OptionIcon />
                    </Popover>
                </div>
                {/* <hr /> */}
                <div>
                    <ul className="useChatList">
                        <li className="useChatItem">
                            <Link to="/inbox/tunpham0311" className="userChat" onClick={() => setOpenChat(true)}>
                                <div className="userChatLeft">
                                    <div className="userChatLeftImg">
                                        <img
                                            src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/223830169_103672262016264_2183549718606660351_n.jpg?stp=c0.12.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qUh9ZgmoSlQAX9Kgmxw&_nc_ht=scontent.fhan15-1.fna&oh=00_AfDUHTL_nWqrl8IZONzjx77wyDetpNL75fAQ7dzOzy1tOg&oe=6432E6DE"
                                            alt=""
                                        />

                                        <FontAwesomeIcon icon={faCircle} className="online" />
                                    </div>
                                    <div className="userChatInfo">
                                        <span className="userChatName">Tuân Phạm</span>
                                        <p className="userChatMessage">hihi mình cũng thấy vậy</p>
                                        <span className="userChatTime">1 minutes ago</span>
                                    </div>
                                </div>
                                <div className="userChatRight">
                                    <OptionIcon />
                                </div>
                            </Link>
                        </li>
                        <li className="useChatItem">
                            <Link to="/inbox/dvd.blue" className="userChat" onClick={() => setOpenChat(true)}>
                                <div className="userChatLeft">
                                    <div className="userChatLeftImg">
                                        <img
                                            src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
                                            alt=""
                                        />

                                        <FontAwesomeIcon icon={faCircle} className="online" />
                                    </div>
                                    <div className="userChatInfo">
                                        <span className="userChatName">Dương Văn Duy</span>
                                        <p className="userChatMessage">hello</p>
                                        <span className="userChatTime">1 minutes ago</span>
                                    </div>
                                </div>
                                <div className="userChatRight">
                                    <OptionIcon />
                                </div>
                            </Link>
                        </li>
                        <li className="useChatItem">
                            <Link to="/inbox/qiu.xian147" className="userChat" onClick={() => setOpenChat(true)}>
                                <div className="userChatLeft">
                                    <div className="userChatLeftImg">
                                        <img
                                            src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
                                            alt=""
                                        />

                                        <FontAwesomeIcon icon={faCircle} className="online" />
                                    </div>
                                    <div className="userChatInfo">
                                        <span className="userChatName">Lê Thị Thu Hiền</span>
                                        <p className="userChatMessage">hello</p>
                                        <span className="userChatTime">1 minutes ago</span>
                                    </div>
                                </div>
                                <div className="userChatRight">
                                    <OptionIcon />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserChats;
