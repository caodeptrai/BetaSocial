import { Col, Row } from 'antd';
import React from 'react';
import './Post.scss';
import { posts } from '../../data';

const Post = () => {
    console.log({ posts });
    return (
        <div className="postPage">
            <Row gutter={[16, 16]}>
                {posts.map((item) => (
                    <Col style={{ position: 'initial' }} span={8} key={item.post_id}>
                        <div className="content">
                            <img src={item.imagePost} alt="" />
                            <div className="overlay"></div>
                            <div className="contentWrapper">
                                <span>
                                    <i className="fa-solid fa-heart"></i>3
                                </span>
                                <span>
                                    <i className="fa-solid fa-comment"></i>
                                    15
                                </span>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Post;
