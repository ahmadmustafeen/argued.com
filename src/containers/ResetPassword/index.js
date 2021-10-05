import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { InputWithLabel } from "../../components";

const theme = {
    fontColor: {
        whiteText: "white",
    },
};




const RequestPassword = (props) => {
    const [state, setState] = useState({});
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const [selectedItem, setSelectedItem] = useState("username")

    const [hidden, setHidden] = useState(true);
    const [Chidden, setCHidden] = useState(true);






    return (
        <div className="auth-container">
            <div className="auth-inner-container">
                <div className="auth-inner-left-container">
                    <img src={require("../../assets/logo-main.png").default} />
                </div>

                <div className="auth-inner-right-container">
                    <div className="auth-inner-right-container-inner">
                        <div className="auth-inner-right-header">
                            <h2 style={{ color: theme.fontColor.whiteText }}>Reset  Password</h2>
                        </div>

                        <div className="auth-inner-right-form-footer-row request-reset-text no-padding-vertical">
                            <h4 style={{ color: theme.fontColor.greyText }}>*We just need your registered email id so we can send you your username reset instruction?</h4>
                        </div>
                        <div className="form-reset-password-container">
                            <div className="input-field-container-auth">
                                <InputWithLabel
                                    name="password"
                                    isSecure
                                    isVisible={hidden}
                                    label="Password"
                                    onChange={onChange}
                                    onClickIcon={() => setHidden(!hidden)}
                                />
                            </div>
                            <div className="input-field-container-auth">
                                <InputWithLabel
                                    name="confirm_password"
                                    isSecure
                                    isVisible={Chidden}
                                    label="Confirm Password"
                                    onChange={onChange}
                                    onClickIcon={() => setCHidden(!Chidden)}
                                />
                            </div>

                        </div>
                        <div className="auth-inner-right-form-footer-submission extra-width-120">
                            <button onClick={() => alert("open dashboard")}>
                                Continue
                            </button>
                            <div className="button-overlapping-icon-container more-right-90">
                                <FontAwesomeIcon

                                    icon={faChevronCircleRight} color={theme.fontColor.whiteText} />

                            </div>

                        </div>
                        <div className="auth-inner-right-form-footer-create-form  extra-padding-request-reset-bottom">

                            <Link to="/signin">

                                <a >
                                    Go Back
                                </a></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestPassword;
