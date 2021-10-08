import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { theme } from "../../constants/theme";
const NotificationModalComponent = props => {
  const {
    text,
    time

  } = props
  return (
    <div className="NotificationModalComponent">
      <div className="NotificationModalComponent-icon">
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          color={theme.fontColor.darkBlue}
        />
      </div>
      <div className="NotificationModalComponent-text">
        <h4 style={{ color: theme.fontColor.whiteText }}>{text}</h4>
      </div>
      <div className="NotificationModalComponent-timespan">
        <h4 style={{ color: theme.fontColor.whiteText }}>{time}</h4>
      </div>

    </div>
  )
}


const NOTIFICATIONS = [{
  label: "some txt here which is totally useless no matter what it containers in terms of programmi ng",
  time: "12:04pm"

}, {
  label: "some txt here which is totally useless no matter what it containers in terms of programmi ng",
  time: "12:04pm"

}, {
  label: "some txt here which is totally useless no matter what it containers in terms of programmi ng",
  time: "12:04pm"

}, {
  label: "some txt here which is totally useless no matter what it containers in terms of programmi ng",
  time: "12:04pm"

}]
const NotificationModal = (props) => {
  return (
    <div className="NotificationModal">
      <div className="NotificationModal-header">
        <div className="NotificationModal-header-cross-container">
          <FontAwesomeIcon icon={faCross} color={"#5083ED"} />

        </div>
        <div className="NotificationModal-header-heading-container">
          <FontAwesomeIcon icon={faCross} color={"#5083ED"} />
          <h2 style={{ color: theme.fontColor.whiteText }}>Notifications</h2>

        </div>

      </div>
      <div className="NotificationModal-container">
        {
          NOTIFICATIONS.map(item=>{
            return(
              <div className="NotificationModal-item-container">
              <NotificationModalComponent
                text={item.label}
                time={item.time}
              />
    
            </div>
            )
          })
        }
      

      </div>
    </div>
  );
};

export { NotificationModal };
