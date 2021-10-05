import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import { InputWithLabel } from "../../components";

const theme = {
    fontColor: {
        whiteText: "white",
    },
};

const OTPScreen = (props) => {
    const [state, setState] = useState({});
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const [hidden, setHidden] = useState(true);

    return (
        <div className="auth-container">
            <div className="auth-inner-container">
                <div className="auth-inner-left-container">
                    <img src={require("../../assets/logo-main.png").default} />
                </div>

                <div className="auth-inner-right-container">
                    <div className="auth-inner-right-container-inner">
                        <div className="auth-inner-right-header">
                            <h2 style={{ color: theme.fontColor.whiteText }}>Enter 4 Digits code</h2>
                        </div>
                        <div className="auth-inner-right-form-footer-row request-reset-text no-padding-vertical">
                            <h4 style={{ color: theme.fontColor.greyText }}>*We just need your registered email id so we can send you your username reset instruction?</h4>
                        </div>
                        <div className="auth-inner-right-otp-container">
                            <div className="auth-box">
                                <input />
                            </div>
                            <div className="auth-box">
                                <input />
                            </div>
                            <div className="auth-box">
                                <input />
                            </div>
                            <div className="auth-box">
                                <input />
                            </div>
                        </div>
                        <div className="auth-inner-right-form-footer-submission extra-width-120">
                            <button >
                                Continue
                            </button>
                            <div className="button-overlapping-icon-container more-right-90">
                                <FontAwesomeIcon

                                    icon={faChevronCircleRight} color={theme.fontColor.whiteText} />

                            </div>

                        </div>
                        <div className="auth-inner-right-form-footer-create-form  extra-padding-request-reset-bottom">


                            <a href="">
                                Go Back
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OTPScreen;
