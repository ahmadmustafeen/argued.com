import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { InputWithLabel } from "../../components";

const theme = {
    fontColor: {
        whiteText: "white",
    },
};

const CustomRadioButton = props => {
    const {
        isSelected,
        label,
        onClick
    } = props
    return (
        <a className="CustomRadioButton" onClick={onClick}>
            <div className="CustomRadioButton-icon">
                <FontAwesomeIcon icon={faCircle} color={isSelected ? "white" : "transparent"} />
            </div>
            <div className="CustomRadioButton-text">
                {label}
            </div>


        </a>
    )
}




const RequestReset = (props) => {
    const [state, setState] = useState({});
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const [hidden, setHidden] = useState(true);
    const [selectedItem, setSelectedItem] = useState("username")





    return (
        <div className="auth-container">
            <div className="auth-inner-container">
                <div className="auth-inner-left-container">
                    <img src={require("../../assets/logo-main.png").default} />
                </div>

                <div className="auth-inner-right-container">
                    <div className="auth-inner-right-container-inner">
                        <div className="auth-inner-right-header">
                            <h2 style={{ color: theme.fontColor.whiteText }}>Reset Username or Password</h2>
                        </div>
                        <div className="auth-inner-selection-field-container">
                            <CustomRadioButton label="Forgot username" isSelected={selectedItem === 'username'} onClick={() => setSelectedItem("username")} />
                        </div>
                        <div className="auth-inner-selection-field-container">
                            <CustomRadioButton label="Forgot password" isSelected={selectedItem === 'password'} onClick={() => setSelectedItem("password")} />
                        </div>
                        <div className="auth-inner-right-form-footer-row request-reset-text">
                            <h4 style={{ color: theme.fontColor.greyText }}>*We just need your registered email id so we can send you your username reset instruction?</h4>
                        </div>

                        <div className="input-field-container-auth extra-padding-request-reset">
                            <InputWithLabel
                                name="email"
                                label="*Email"
                                onChange={onChange}
                            />
                        </div>
                        <div className="auth-inner-right-form-footer-submission">
                           <Link to="otp">
                           <button >
                                Reset
                            </button>
                            </Link>
                            <div className="button-overlapping-icon-container">
                                <FontAwesomeIcon

                                    icon={faChevronCircleRight} color={theme.fontColor.whiteText} />

                            </div>

                        </div>
                        <div className="auth-inner-right-form-footer-create-form  extra-padding-request-reset-bottom">
                          

                          <Link to="signin">
                          <a href="">
                                Go Back
                            </a>
                          </Link> 

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestReset;
