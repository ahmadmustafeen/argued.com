import React from 'react'
import './style.css'
import { CustomHeader } from '../MyContacts'
import { theme } from '../../constants/theme'
import { faCheckCircle, faChevronCircleRight,faTimesCircle, faUserFriends, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyGroupsElement = props => {
    const {
        name,
        purpose,
        date_joined,
        last_message,
        members,
        isAdmin
    } = props
    return (
        <div className="MyGroupsElement-container">
            <div className="MyGroupsElement-container-img">
                <div className="contacttables-container-img-container">
                    <img src={require("../../assets/testing.jpg").default} />
                </div>
            </div>
            <div className="MyGroupsElement-container-name">
                <h4 style={{ color: theme.fontColor.whiteText }}>
                    {name}
                </h4>

            </div>
            <div className="MyGroupsElement-container-purpose">
                <h3 style={{ color: theme.fontColor.greyText }}>
                    Purpose
                </h3>
                <h4 style={{ color: theme.fontColor.whiteText }}>
                    {purpose}
                </h4>

            </div>
            <div className="MyGroupsElement-container-joined">
                <h3 style={{ color: theme.fontColor.greyText }}>
                    Date joined
                </h3>
                <h4 style={{ color: theme.fontColor.whiteText }}>
                    {date_joined}
                </h4>
            </div>
            <div className="MyGroupsElement-container-joined">
                <h3 style={{ color: theme.fontColor.greyText }}>
                    Last Message
                </h3>
                <h4 style={{ color: theme.fontColor.whiteText }}>
                    {last_message}
                </h4>
            </div>
            <div className="MyGroupsElement-container-purpose">
                <h3 style={{ color: theme.fontColor.greyText }}>
                    Members
                </h3>
                <h4 style={{ color: theme.fontColor.whiteText }}>
                    {members}
                </h4>
            </div>
            <div className="MyGroupsElement-container-purpose">
                <h3 style={{ color: theme.fontColor.greyText }}>
                    Admin
                </h3>
                <FontAwesomeIcon

                    icon={isAdmin?faCheckCircle:faTimesCircle}
                     color={isAdmin?"green":theme.fontColor.darkBlue}
                />
            </div>
            <div className="MyGroupsElement-container-details">
                <h3 style={{ color: theme.fontColor.greyText }}>
                    Details
                </h3>
                <div className="MyGroupsElement-container-details-button" style={{backgroundColor:theme.fontColor.darkBlue}}>
                <h4 style={{ color: theme.fontColor.whiteText }}>
                    Details
                </h4>
                <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    color={theme.fontColor.whiteText}
                />
                </div>
              
            </div>


        </div>
    )
}

const MyGroups = props => {
    return (
        <div className="myGroups">
            <CustomHeader
                icon={faUserFriends}
                buttonIcon={faChevronCircleRight}
                label="How Can We Help You?"
                buttonText="Create Group"
            />
            <div className="MyContacts-table-container">
            <div className="MyContacts-table-row">
                    <MyGroupsElement
                        name="HOST 123"
                        purpose="12344"
                        date_joined="Feburary 11,2014"
                        last_message="17 Oct,2020"
                        members="2"
                    />
                </div>
                <div className="MyContacts-table-row">
                    <MyGroupsElement
                        name="HOST 123"
                        purpose="12344"
                        date_joined="Feburary 11,2014"
                        last_message="17 Oct,2020"
                        members="2"
                        isAdmin
                    />
                </div>
            </div>
        </div>
    )
}


export default MyGroups