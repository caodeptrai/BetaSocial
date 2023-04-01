import React, { useState } from 'react';
import './Input.scss';
import EmojiPicker from 'emoji-picker-react';
import { EmojiIcon, LikeIcon, UploadIcon } from '../iconSvg';

const Input = () => {
    const [emoji, setEmoji] = useState(false);
    const [input, setInput] = useState('');
    return (
        <div className="input">
            <div className="inputWrapper">
                <button onClick={() => setEmoji(!emoji)} className="emojiBtn">
                    <EmojiIcon />
                </button>
                {emoji && (
                    <EmojiPicker
                        searchDisabled="true"
                        previewConfig={{ showPreview: true }}
                        emojiStyle="google"
                        onEmojiClick={(e) => setInput((input) => input + e.emoji)}
                        height="350px"
                    />
                )}
                <input
                    type="text"
                    placeholder="Create a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <div className="send">
                    <input type="file" style={{ display: 'none' }} id="file" />
                    <label htmlFor="file">
                        <span>
                            <UploadIcon />
                        </span>
                    </label>
                    <button>
                        <LikeIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Input;
