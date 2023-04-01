import React, { useState } from 'react';
import './Post.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import EmojiPicker from 'emoji-picker-react';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { BookMarkedIcon, BookMarkIcon, CommentIcon, LikedIcon, LikeIcon, ShareIcon } from '../iconSvg';

const Post = ({ data }) => {
    const [saved, setSaved] = useState(false);
    const [liked, setLiked] = useState(false);
    const [emoji, setEmoji] = useState(false);
    const [input, setInput] = useState('');

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="post">
            <div className="postContainer">
                <div className="info">
                    <div className="infoWrapper">
                        <img className="avatar" src={data?.user_post_avatar} alt="" />
                        <div>
                            <span className="nickname">{data?.user_post_name}</span>
                            <span className="createAt">4 days ago</span>
                        </div>
                    </div>
                    <div className="menu">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                <img className="img" src={data.imagePost} alt="" />
                <div className="option">
                    <div className="optionLeft">
                        {liked ? (
                            <div
                                onClick={(e) => {
                                    handleLike();
                                }}
                            >
                                <LikedIcon />
                            </div>
                        ) : (
                            <div
                                onClick={(e) => {
                                    handleLike();
                                }}
                            >
                                <LikeIcon />
                            </div>
                        )}
                        <CommentIcon />
                        <ShareIcon />
                    </div>
                    <div className="optionRight" onClick={() => setSaved(!saved)}>
                        {saved ? <BookMarkedIcon /> : <BookMarkIcon height={24} width={24} />}
                    </div>
                </div>
                <span className="like">{`${data.like} like`}</span>
                <p className="status">what are you now,today?</p>
                <span className="comment">See all 100 comments</span>

                <div className="inputComment">
                    <input
                        type="text"
                        placeholder="create comments..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={() => setEmoji(!emoji)} className="emoji">
                        <FontAwesomeIcon icon={faFaceSmile} />
                    </button>
                    {emoji && (
                        <EmojiPicker
                            searchDisabled="true"
                            previewConfig={{ showPreview: false }}
                            emojiStyle="google"
                            onEmojiClick={(e) => setInput((input) => input + e.emoji)}
                            height="350px"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Post;
