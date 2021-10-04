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

const Signin = (props) => {
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
              <h2 style={{ color: theme.fontColor.whiteText }}>Log in</h2>
            </div>
            <div className="auth-inner-right-form-container">
              <div className="input-field-container-auth">
                <InputWithLabel
                  name="email"
                  label="Email"
                  value={state.email}
                  onChange={onChange}
                />
              </div>

              <div className="input-field-container-auth">
                <InputWithLabel
                  name="password"
                  isSecure
                  isVisible={hidden}
                  label="Password"
                  value={state.email}
                  onChange={onChange}
                  onClickIcon={() => setHidden(!hidden)}
                />
              </div>
            </div>
            <div className="auth-inner-right-form-footer-container">
              <div className="auth-inner-right-form-footer-row">
                <h4 style={{color:theme.fontColor.greyText}}>*Forgot your password?</h4>
                <a style={{color:theme.fontColor.lightBlue}}>Reset Here</a>
              </div>
            <div className="auth-inner-right-form-footer-submission">
                <button >
                    Login
                </button>
                <div className="button-overlapping-icon-container">
                <FontAwesomeIcon 
                
                icon={faChevronCircleRight} color={theme.fontColor.whiteText} />

                </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
