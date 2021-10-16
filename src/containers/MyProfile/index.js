import React from 'react'
import './style.css'

import { CustomHeader } from '../MyContacts'
import { theme } from '../../constants/theme'
import { faChevronCircleRight, faUser, faUserFriends, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MyProfile = props => {
    return (
        <div className="profilePageContainer">
            <CustomHeader
                icon={faUser}
                noButton
                buttonIcon={faChevronCircleRight}
                label="My Profile"
                buttonText="Create Group"
            />
            <div className="profilePageContainer-upload_image_container">
                <div className="profilePageContainer-upload_image_container_img">
                    <img src={require("../../assets/testing.jpg").default} />
                </div>
                <h2 style={{ color: theme.fontColor.greyText }}>
                    Change Image
                </h2>
            </div>
            <div className="profilePageInputContainer-boxContainer">
                <div className="profilePageInputContainer-box">
                    <div className="profilePageInputContainer-box-left">
                        <div className="profilePageInputContainer-box-itemRow">
                            <div className="inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        Your Name
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                            <div className="inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        {/* Your Name */}
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                        </div>
                        <div className="profilePageInputContainer-box-itemRow">
                            <div className="inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        Gender
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                            <div className="inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        Email
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                        </div>
                        <div className="profilePageInputContainer-box-itemRow">
                            <div className="inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        Phone
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                            <div className="inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        Nationality
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                        </div>
                    </div>
                    <div className="profilePageInputContainer-box-right">
                        <div className="profilePageInputContainer-box-itemRow single-item-profilePageInputContainer">
                            <div className="inputItemContainer full-width-inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        Your Name
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                        </div>
                        <div className="profilePageInputContainer-box-itemRow single-item-profilePageInputContainer">
                            <div className="inputItemContainer full-width-inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        Your Name
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                        </div>
                        <div className="profilePageInputContainer-box-itemRow single-item-profilePageInputContainer">
                            <div className="inputItemContainer full-width-inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        Your Name
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="profilePageInputContainer-boxContainer">
                <div className="profilePageInputContainer-box">
                    <div className="profilePageInputContainer-box-left">
                        <div className="profilePageInputContainer-box-itemRow">
                            <div className="inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        Password
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                            <div className="inputItemContainer">
                                <div className="inputItemContainer-headingContainer">
                                    <h3 style={{ color: theme.fontColor.darkBlue }}>
                                        Confirm Password
                                    </h3>
                                </div>
                                <input placeholder="Your first name" />

                            </div>
                        </div>
                     
                    </div>
                   
                </div>

            </div>

        </div>
    )
}

export default MyProfile