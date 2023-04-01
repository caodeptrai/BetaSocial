import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconPassword from '../../imgs/passwordicon.png';
import './Register.scss';
const Register = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [viewPassword, setViewPassword] = useState(false);
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const fullName = e.target[0].value;
        const userName = e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;
    };
    return (
        <div className="register">
            <div className="registerContainer">
                <div className="registerForm">
                    <div className="logo">
                        <h1>BetaSocial</h1>
                        <span className="dot">.</span>
                    </div>
                    <span className="registerTitle">Sign Up</span>
                    <form onSubmit={handleSubmit}>
                        <div className="inputContainer">
                            <i className="registerIcon fa-regular fa-user"></i>
                            <input type="text" placeholder="Full name" />
                        </div>
                        <div className="inputContainer">
                            <i className="registerIcon fa-regular fa-user"></i>
                            <input type="text" placeholder="User name" />
                        </div>
                        <div className="inputContainer">
                            <i className="registerIcon fa-regular fa-envelope"></i>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="inputContainer">
                            <img className="iconPassword" src={IconPassword} alt="" />
                            <input type={viewPassword ? 'text' : 'password'} placeholder="Password" />
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

                        <button className="registerButton">Sign up</button>
                    </form>
                    <span className="diricLogin">
                        Already have an account?
                        <Link to="/login" className="link">
                            {' '}
                            Login
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Register;
