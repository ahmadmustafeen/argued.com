import React from "react";
import { theme } from "../../constants/theme";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons'



const InputWithLabel = (props) => {
  const { label, onChange, value, name,isSecure,isVisible ,onClickIcon} = props;
  return (
    <div className="inputwithlabel-container">
      <div className="inputwithlabel-container-label">
        <h3 style={{ color: theme.fontColor.whiteText }}>{label}</h3>
      </div>

      <div className="inputwithlabel-container-inputContainer">
        <input type={isVisible?"password":"text"} onChange={onChange} name={name}/>
      </div>
     {isSecure&& <div className="eyeComponent-container">
          {
              isVisible?
              <FontAwesomeIcon icon={faEyeSlash} color={theme.fontColor.whiteText}  onClick={onClickIcon}/>
              :
              <FontAwesomeIcon icon={faEye}  color={theme.fontColor.whiteText}  onClick={onClickIcon}/>

          }
      </div>}
    </div>
  );
};

export { InputWithLabel };
