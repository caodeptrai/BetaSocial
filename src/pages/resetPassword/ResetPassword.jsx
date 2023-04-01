import React from 'react';
import './ResetPassword.scss';
import LockImg from '../../imgs/lock.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const ResetPassword = () => {
    return (
        <div className="resetPassword">
            <div className="resetPasswordContainer">
                <img src={LockImg} alt="" />
                <h3 className="resetpassTitle">Having trouble logging in?</h3>
                <p className="resetpassDesc">
                    Enter your email, phone number or username and we'll send you a link to access your account again.
                </p>
                <input type="text" className="inputLink" placeholder="Email, phone or username " />
                <button className="sendlinkBtn">Send login link</button>
                <span className="notresetPass">Can't reset your password</span>

                <div className="resetOr">
                    <div className="divider"></div>
                    <div className="desc">OR</div>
                </div>
                <button className="createAccountBtn">
                    <Link to="/register" className="link">
                        Create a new account
                    </Link>
                </button>
                <button className="backLoginBtn">
                    <Link to="/login" className="link">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: 6 }} />
                        Back to login
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default ResetPassword;
