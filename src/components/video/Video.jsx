import React, { useEffect, useRef } from 'react';
import './Video.scss';
import video1 from '../../imgs/video1.mp4';
import {
    BookMarkIcon,
    CommentIcon,
    LikeIcon,
    LoudspeakerDisabledIcon,
    LoudspeakerIcon,
    OptionIcon,
    ShareIcon,
    SoundIcon,
} from '../iconSvg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useElementOnScreen } from '../../hooks/useElementOnScreen';
const Video = () => {
    const [isMuted, setIsMuted] = useState(true);

    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    const isVisibile = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisibile]);

    return (
        <div className="video">
            <div className="videoContainer">
                <div className="videoWrapper">
                    <video
                        ref={videoRef}
                        onClick={handleVideo}
                        src={video1}
                        className="videoSrc"
                        muted={isMuted ? false : true}
                        loop
                    ></video>
                    <div className="audio" onClick={() => setIsMuted(!isMuted)}>
                        {isMuted ? <LoudspeakerIcon /> : <LoudspeakerDisabledIcon />}
                    </div>
                    <div className="info">
                        <div className="infoUser">
                            <img
                                src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/308476054_1103307597057379_870838083421102790_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qWAm-872ZOUAX-1SZdz&_nc_ht=scontent.fhan15-1.fna&oh=00_AfA8KyBVxM_cS1RkNBse-k-XhhU9Wi-hOPDUGg4fg6tXGg&oe=6428C1DB"
                                alt=""
                            />
                            <div className="username">caocao</div>
                            <FontAwesomeIcon icon={faCircle} className="dot" />
                            <button>Theo dõi</button>
                        </div>
                        <div className="content">
                            <p className="hashtag">#videohay</p>
                            <p className="desc">xin chào mọi người!!</p>
                        </div>
                        <div className="sound">
                            <SoundIcon />
                            <span className="soundName">vijodi</span>
                            <span>.</span>
                            <span>Âm thanh gốc</span>
                        </div>
                    </div>
                </div>

                <div className="option">
                    <div className="optionItem">
                        <LikeIcon />
                        <span>1,2 Tr</span>
                    </div>
                    <div className="optionItem">
                        <CommentIcon />
                        <span>815</span>
                    </div>
                    <div className="optionItem">
                        <ShareIcon />
                    </div>
                    <div className="optionItem">
                        <BookMarkIcon height={24} width={24} />
                    </div>
                    <div className="optionItem">
                        <OptionIcon />
                    </div>
                    <div className="optionItem">
                        <img
                            className="sourceImg"
                            src="https://img.meta.com.vn/Data/image/2021/09/20/anh-meo-che-anh-meo-bua-15.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
