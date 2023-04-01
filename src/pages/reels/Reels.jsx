import React from 'react';
import './Reels.scss';
import Video from '../../components/video/Video';
const Reels = () => {
    return (
        <div className="reels">
            <div className="reelsContainer">
                <Video />
                <Video />
                <Video />
            </div>
        </div>
    );
};

export default Reels;
