import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross,faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { theme } from "../../constants/theme";


const NotificationModal = (props) => {
  return (
    <div className="NotificationModal">
      <div className="NotificationModal-header">
        <div className="NotificationModal-header-cross-container">
        <FontAwesomeIcon icon={faCross} color={ "#5083ED"} />
        
        </div>
        <div className="NotificationModal-header-heading-container">
        <FontAwesomeIcon icon={faCross} color={ "#5083ED"} />
        <h2 style={{color:theme.fontColor.whiteText}}>Notifications</h2>
        
        </div>
     
      </div>
    </div>
  );
};

export { NotificationModal };
