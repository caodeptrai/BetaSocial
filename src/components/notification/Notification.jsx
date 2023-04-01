import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import './Notification.scss';
const Notification = () => {
    const { toggleSidebar, openNotification } = useContext(AppContext);
    return (
        <div className={toggleSidebar && openNotification ? 'notification openNotification' : 'notification'}>
            <div className="notificationContainer">
                <h3 className="notificationTitle">Notification</h3>
                <div className="notificationContent">
                    <h4 className="notificationHeading">Today</h4>
                    <ul className="notificationList">
                        <li className="notificationItem">
                            <img
                                className="notificationImg"
                                src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
                                alt=""
                            />
                            <div className="notifyWrap">
                                <p className="notify">
                                    vanvan.01 has started following you.
                                    <span className="notifyTime">20 minutes ago</span>
                                </p>
                            </div>
                            <button className="notificationBtn">Follow</button>
                        </li>
                        <li className="notificationItem">
                            <img
                                className="notificationImg"
                                src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
                                alt=""
                            />
                            <div className="notifyWrap">
                                <p className="notify">
                                    vanvan.01 has started following you.
                                    <span className="notifyTime">20 minutes ago</span>
                                </p>
                            </div>
                            <button className="notificationBtn">Follow</button>
                        </li>
                        <li className="notificationItem">
                            <img
                                className="notificationImg"
                                src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
                                alt=""
                            />
                            <div className="notifyWrap">
                                <p className="notify">
                                    vanvan.01 has started following you.
                                    <span className="notifyTime">20 minutes ago</span>
                                </p>
                            </div>
                            <button className="notificationBtn">Follow</button>
                        </li>
                        <li className="notificationItem">
                            <img
                                className="notificationImg"
                                src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
                                alt=""
                            />
                            <div className="notifyWrap">
                                <p className="notify">
                                    vanvan.01 has started following you.
                                    <span className="notifyTime">20 minutes ago</span>
                                </p>
                            </div>
                            <button className="notificationBtn">Follow</button>
                        </li>
                    </ul>
                </div>

                <div className="notificationContent">
                    <h4 className="notificationHeading">This Week</h4>
                    <ul className="notificationList">
                        <li className="notificationItem">
                            <img
                                className="notificationImg"
                                src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
                                alt=""
                            />
                            <div className="notifyWrap">
                                <p className="notify">
                                    vanvan.01 has started following you.
                                    <span className="notifyTime">2 day ago</span>
                                </p>
                            </div>
                            <button className="notificationBtn">Follow</button>
                        </li>
                        <li className="notificationItem">
                            <img
                                className="notificationImg"
                                src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
                                alt=""
                            />
                            <div className="notifyWrap">
                                <p className="notify">
                                    vanvan.01 has started following you.
                                    <span className="notifyTime">2 day ago</span>
                                </p>
                            </div>
                            <button className="notificationBtn">Follow</button>
                        </li>
                        <li className="notificationItem">
                            <img
                                className="notificationImg"
                                src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
                                alt=""
                            />
                            <div className="notifyWrap">
                                <p className="notify">
                                    vanvan.01 has started following you.
                                    <span className="notifyTime">2 day ago</span>
                                </p>
                            </div>
                            <button className="notificationBtn">Follow</button>
                        </li>
                        <li className="notificationItem">
                            <img
                                className="notificationImg"
                                src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-34.jpg"
                                alt=""
                            />
                            <div className="notifyWrap">
                                <p className="notify">
                                    vanvan.01 has started following you.
                                    <span className="notifyTime">2 day ago</span>
                                </p>
                            </div>
                            <button className="notificationBtn">Follow</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Notification;
