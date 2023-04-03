import { Col, Row } from 'antd';
import React from 'react';
import './Inbox.scss';
import UserChats from '../../components/userChats/UserChats';
import ChatWindow from '../chatWindow/ChatWindow';

const Inbox = () => {
    return (
        <div className="inbox">
            <Row>
                <Col span={8}>
                    <UserChats />
                </Col>
                <Col span={16}>
                    <ChatWindow />
                </Col>
            </Row>
        </div>
    );
};

export default Inbox;
