import React, { useEffect, useState } from 'react';
import './Login.scss';
import BannerLogin from '../../imgs/bannerlogin.png';
import IconPassword from '../../imgs/passwordicon.png';
import GoogleIcon from '../../imgs/googleicon.png';
import FacebookIcon from '../../imgs/facebookicon.png';
import TwitterIcon from '../../imgs/twittericon.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(true);
    const [message, setMessage] = useState('');
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [viewPassword, setViewPassword] = useState(false);

    useEffect(() => {
        const validateAll = () => {
            if (values !== '' && password !== '') {
                setErr(false);
            }
        };

        validateAll();
    }, [password, values]);

    // login with email
    const handleSubmit = async (e) => {
        e.preventDefault();
        const msg = {};
        if (values !== 'duongcao304' || values !== 'duongvancao999@gmail.com') {
            msg.value = 'Sorry, your user name or email does not exist';
            setMessage(msg);
        }
        if (password !== '12345678') {
            msg.password = 'Sorry, your password is incorrect.';
            setMessage(msg);
        }
        if ((values === 'duongcao304' || values === 'duongvancao999@gmail.com') && password === '12345678') {
            navigate('/');
            console.log('vao trang chu');
        }
    };
    return (
        <div className="login">
            <div className="loginContainer">
                <div className="bannerLogin">
                    <img src={BannerLogin} alt="" />
                </div>
                <div className="right">
                    <div className="loginForm">
                        <div className="logo">
                            <h1>BetaSocial</h1>
                            <span className="dot">.</span>
                        </div>
                        <span className="loginTitle">Login</span>

                        <form onSubmit={handleSubmit}>
                            <div className="inputWapper">
                                <div className="inputContainer">
                                    <i className="inputIcon fa-regular fa-user"></i>
                                    <input
                                        type="text"
                                        placeholder="Username/Email"
                                        value={values}
                                        onChange={(e) => setValues(e.target.value)}
                                    />
                                </div>
                                <p className="messageText">{message.value}</p>
                            </div>
                            <div className="inputWapper">
                                <div className="inputContainer">
                                    <img className="iconPassword" src={IconPassword} alt="" />
                                    <input
                                        type={viewPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {viewPassword ? (
                                        <i
                                            className="registerIcon registerIconPass fa-regular fa-eye"
                                            onClick={() => setViewPassword(!viewPassword)}
                                        ></i>
                                    ) : (
                                        <i
                                            className="registerIcon registerIconPass fa-solid fa-eye-slash"
                                            onClick={() => setViewPassword(!viewPassword)}
                                        ></i>
                                    )}
                                </div>
                                <p className="messageText">{message.password}</p>
                            </div>
                            <button disabled={err && true} className={err ? 'loginButton disable ' : 'loginButton'}>
                                Login
                            </button>
                        </form>
                        <div className="loginWith">
                            <div className="divider"></div>
                            <div className="desc">or login with</div>
                        </div>
                        <div className="optionButton">
                            <button className="optionButtonItem">
                                <img src={GoogleIcon} alt="" />
                                Google
                            </button>
                            <button className="optionButtonItem">
                                <img src={FacebookIcon} alt="" />
                                Facebook
                            </button>
                            <button className="optionButtonItem">
                                <img src={TwitterIcon} alt="" />
                                Twitter
                            </button>
                        </div>
                        <Link to="/resetpassword" className="forgotPass">
                            Forgot password?
                        </Link>
                        <span className="diricSinup">
                            Don't have an account?
                            <Link to="/register" className="link">
                                {' '}
                                Sign up
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
