import { Col, Row } from 'antd';
import React from 'react';
import { posts } from '../../data';
import './Explore.scss';
const Explore = () => {
    return (
        <div className="explore">
            <Row gutter={[8, 8]}>
                {posts.map((item) => (
                    <Col style={{ position: 'initial' }} span={8} key={item.post_id}>
                        <div className="content">
                            <img src={item.imagePost} alt="" />
                            <div className="overlay"></div>
                            <div className="contentWrapper">
                                <span>
                                    <i className="fa-solid fa-heart"></i>3.522
                                </span>
                                <span>
                                    <i className="fa-solid fa-comment"></i>
                                    120
                                </span>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Explore;
