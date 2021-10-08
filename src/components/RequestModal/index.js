import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faPlusCircle, faUser, faUsers,faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { theme } from "../../constants/theme";


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
const RequestModal = (props) => {
    return (
        <div className="NotificationModal RequestModal">
            <div className="NotificationModal-header">
                <div className="NotificationModal-header-cross-container">
                    <FontAwesomeIcon icon={faTimesCircle} color={"#5083ED"} />

                </div>
                <div className="NotificationModal-header-heading-container">
                    <FontAwesomeIcon icon={faUser} color={"#5083ED"} />
                    <h2 style={{ color: theme.fontColor.whiteText }}>Requests</h2>

                </div>

            </div>
            <div className="NotificationModal-container">


                <div className="NotificationModal-item-container request-item-container">

                    <div className="NotificationModalComponent-icon request-icon">
                        <FontAwesomeIcon
                            icon={faPlusCircle}
                            color={theme.fontColor.darkBlue}
                        />
                    </div>
                    <div className="NotificationModalComponent-text request-label">
                        <h4 style={{ color: theme.fontColor.whiteText }}>Contact Requests</h4>
                    </div>
                    <div className="NotificationModalComponent-timespan">
                        <FontAwesomeIcon
                            icon={faChevronCircleRight}
                            color={theme.fontColor.darkBlue}
                        />
                    </div>

                </div>
                <div className="NotificationModal-item-container request-item-container">

                    <div className="NotificationModalComponent-icon request-icon">
                        <FontAwesomeIcon
                            icon={faUsers}
                            color={theme.fontColor.darkBlue}
                        />
                    </div>
                    <div className="NotificationModalComponent-text request-label">
                        <h4 style={{ color: theme.fontColor.whiteText }}>Group Requests</h4>
                    </div>
                    <div className="NotificationModalComponent-timespan">
                        <FontAwesomeIcon
                            icon={faChevronCircleRight}
                            color={theme.fontColor.darkBlue}
                        />
                    </div>

                </div>

            </div>
        </div>
    );
};

export { RequestModal };
