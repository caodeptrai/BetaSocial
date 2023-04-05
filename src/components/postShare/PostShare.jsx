import React, { useRef } from 'react';
import './PostShare.scss';

const PostShare = () => {
    const imageRef = useRef();

    return (
        <div className="PostShare">
            <img src="https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-38.jpg" alt="" />
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
