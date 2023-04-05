import React, { useRef } from 'react';
import './PostShare.scss';

const PostShare = () => {
    const imageRef = useRef();

    return (
        <div className="PostShare">
            <img src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-1/308476054_1103307597057379_870838083421102790_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Yj5tkSN8RI0AX-k1pjk&_nc_ht=scontent.fhan5-9.fna&oh=00_AfBY9LauESiHpY7z3VBh7CvuTNOVorCKmyDvVCdqIp00TQ&oe=6432A51B" alt="" />
            <div className="wrapper">
                <input type="text" placeholder="Cao, What are you thinking?" />
                <div className="postOptions">
                    <div className="option" style={{ color: '#0CE400' }} onClick={() => imageRef.current.click()}>
                        <i className="fa-solid fa-image"></i>
                        Photo
                    </div>
                    <div className="option" style={{ color: '#FAB005' }}>
                        <i className="fa-solid fa-film"></i>
                        Video
                    </div>
                    <div className="option" style={{ color: '#E47A00' }}>
                        <i className="fa-solid fa-location-dot"></i>
                        Location
                    </div>
                    <button className="button ps-button">Share</button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name="myImage" ref={imageRef} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostShare;
