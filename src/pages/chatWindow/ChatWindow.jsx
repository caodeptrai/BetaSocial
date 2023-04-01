import React, { useContext } from 'react';
import { VideoCameraOutlined, PhoneOutlined } from '@ant-design/icons';
import './ChatWindow.scss';
import { AppContext } from '../../contexts/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Messages from '../../components/messages/Messages';
import Input from '../../components/input/Input';
import WellCome from '../../components/wellcome/Wellcome';
const ChatWindow = () => {
    const { setIsProfileVisibleUser, openChat } = useContext(AppContext);

    const handleInfoUser = () => {
        setIsProfileVisibleUser(true);
    };

    return (
        <div className="chat">
            <div className="chat-container">
                {openChat ? (
                    <>
                        <div className="chatHeader">
                            <>
                                <div className="chatInfo" onClick={handleInfoUser}>
                                    <div className="chatAvatar">
                                        <img
                                            src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/223830169_103672262016264_2183549718606660351_n.jpg?stp=c0.12.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1sawiuysnawAX-2-chu&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCXYrqSuBpMVqXTPiVWlsBU76D_keM8cmDbrXlM9zd1tg&oe=642CF81E"
                                            alt=""
                                        />
                                        <FontAwesomeIcon icon={faCircle} className="online" />
                                    </div>
                                    <div className="chatNameWrapper">
                                        <span className="chatName">Tuân Phạm</span>
                                        <span className="status">online</span>
                                    </div>
                                </div>
                                <div className="chatIcons">
                                    <span>
                                        <VideoCameraOutlined className="chatIcon" />
                                    </span>
                                    <span>
                                        <PhoneOutlined className="chatIcon" />
                                    </span>
                                </div>
                            </>
                        </div>

                        <Messages />
                        <Input />
                    </>
                ) : (
                    <WellCome />
                )}
            </div>
        </div>
    );
};

export default ChatWindow;
