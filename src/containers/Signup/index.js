import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { InputWithLabel } from "../../components";

const theme = {
  fontColor: {
    whiteText: "white",
  },
};

const Signup = (props) => {
  const [state, setState] = useState({});
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
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
              <h2 style={{ color: theme.fontColor.whiteText }}>Sign up</h2>
            </div>
            <div className="auth-inner-right-form-container">
            <div className="input-field-container-auth">
                <InputWithLabel
                  name="username"
                  label="*Username"
                  onChange={onChange}
                />
              </div>
              <div className="input-field-container-auth">
                <InputWithLabel
                  name="email"
                  label="*Email"
                  onChange={onChange}
                />
              </div>

              <div className="input-field-container-auth">
                <InputWithLabel
                  name="password"
                  isSecure
                  isVisible={hidden}
                  label="*Password"
                  onChange={onChange}
                  onClickIcon={() => setHidden(!hidden)}
                />
              </div>
              <div className="input-field-container-auth">
                <InputWithLabel
                  name="confirm_password"
                  isSecure
                  isVisible={Chidden}
                  label="*Confirm Password"
                  onChange={onChange}
                  onClickIcon={() => setCHidden(!Chidden)}
                />
              </div>
            </div>
            <div className="auth-inner-right-form-footer-container">
              {/* <div className="auth-inner-right-form-footer-row">
                <h4 style={{ color: theme.fontColor.greyText }}>*Forgot your password?</h4>
                <a style={{ color: theme.fontColor.lightBlue }}>Reset Here</a>
              </div> */}
              <div className="auth-inner-right-form-footer-submission">
                <button  onClick={()=>alert("SIGNUP")}>
                  Submit
                </button>
                <div className="button-overlapping-icon-container">
                  <FontAwesomeIcon

                    icon={faChevronCircleRight} color={theme.fontColor.whiteText} />

                </div>

              </div>
            <div className="auth-inner-right-form-footer-create-form">
              <h3 style={{color:theme.fontColor.whiteText}}>
                Already have an account?
              </h3>
              
              <Link to="signin">
                <a href="">
                  Login here
                </a>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
