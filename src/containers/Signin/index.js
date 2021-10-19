import React, { useState,useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

import { InputWithLabel } from "../../components";
import { UseReduxHook } from "../../redux/customHooks/useReduxHook";
import { ActionWithPayload } from "../../redux/actions";
import { SIGN_IN } from "../../redux/actionTypes";

const theme = {
  fontColor: {
    whiteText: "white",
  },
};

const Signin = (props) => {
  const history = useHistory();
// const {store,dispatch} = UseReduxHook()
const dispatch = useDispatch()
const {UserProfileReducer} = useSelector(store=>{
  return{
    UserProfileReducer:store.UserProfileReducer
  }
})
console.log("UserProfileReducer",UserProfileReducer)

  const [state, setState] = useState({});
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(()=>{
    // console.log(store,"store")
    if(UserProfileReducer?.token){
      // history.push("/")
    }
  },[UserProfileReducer])
  const handleSubmit = () => {
  dispatch(ActionWithPayload(SIGN_IN,{...state,history}))
  }
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
                  name="username"
                  label="Email"
                  value={state.username}
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
                <h4 style={{ color: theme.fontColor.greyText }}>*Forgot your password?</h4>
                <Link to="requestreset">
                  <a style={{ color: theme.fontColor.lightBlue }}>Reset Here</a>
                </Link>
              </div>
              <div className="auth-inner-right-form-footer-submission">
                <button onClick={()=> handleSubmit()}>
                  Login
                </button>
                <div className="button-overlapping-icon-container">
                  <FontAwesomeIcon

                    icon={faChevronCircleRight} color={theme.fontColor.whiteText} />

                </div>

              </div>
              <div className="auth-inner-right-form-footer-create-form">
                <h3 style={{ color: theme.fontColor.whiteText }}>
                  Don't have an account yet?
                </h3>
                <Link to="signup">
                  <a href="">
                    Create one now
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

export default Signin;
