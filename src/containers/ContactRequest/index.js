import React from 'react'
import './style.css'
import { theme } from '../../constants/theme'
import { CustomHeader } from '../MyContacts'
import { faChevronCircleRight, faUserFriends, faPlusCircle, faChevronCircleDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactRequest = props => {
    const {

    } = props
    return (
        <div className="ContactRequest-container">
            <CustomHeader
                icon={faPlusCircle}
                buttonIcon={faChevronCircleRight}
                label="Contact Requests"
                buttonText="My Contact"
                searchIcon
            />
            <div className="ContactRequest-requestContainer">
                {['', '', '','', '', '','', '', ''].map(item => {
                    return (
                        <div className="ContactRequest-requestContainer-row">
                            <div className="ContactRequest-requestContainer-row-left">

                                <div className="ContactRequest-requestContainer-row-left-img">

                                    <img src={require("../../assets/testing.jpg").default} />

                                </div>
                                <div className="ContactRequest-requestContainer-row-left-text">

                                    <h3 style={{ color: theme.fontColor.whiteText }}>Alexander Graham Bell</h3>

                                </div>
                            </div>
                            <div className="ContactRequest-requestContainer-row-right">
                                <div className="ContactRequest-requestContainer-row-right-buttonContainer" style={{ backgroundColor: theme.fontColor.darkBlue }}>
                                    <h3 style={{ color: theme.fontColor.whiteText }}>Accept</h3>
                                    <FontAwesomeIcon
                                        icon={faPlusCircle}
                                        color={theme.fontColor.whiteText}

                                    />

                                </div>
                                <div className="ContactRequest-requestContainer-row-right-buttonContainer" style={{ backgroundColor: theme.fontColor.greyText }}>
                                    <h3 style={{ color: theme.fontColor.whiteText }}>Decline</h3>
                                    <FontAwesomeIcon
                                        icon={faTimesCircle}
                                        color={theme.fontColor.whiteText}

                                    />
                                </div>

                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}


export default ContactRequest