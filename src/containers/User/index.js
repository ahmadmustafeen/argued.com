import { theme } from '../../constants/theme'
import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faPlusCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const User = props => {
    return (
        <div className="userscreen-container">
            <div className="userscreen-userContainer" style={{ backgroundImage: `url(${require("../../assets/testing.jpg").default})` }}>
                <div className="userscreen-userContainer-inner">
                    <div className="userscreen-userContainer-inner-left">
                        <img src={require("../../assets/testing.jpg").default} />

                    </div>
                    <div className="userscreen-userContainer-inner-right">
                        <h3 style={{ color: theme.fontColor.whiteText }}>Jane Cooper</h3>
                        <h4 style={{ color: theme.fontColor.whiteText }}>{`3 Viewers | 4 Videos`}</h4>
                        <div className="userscreen-userContainer-inner-right-buttonContainer">
                            <div className="userscreen-userContainer-inner-right-button" style={{backgroundColor:theme.fontColor.darkBlue}}>
                                <h3 style={{ color: theme.fontColor.whiteText }}>Contacts</h3>
                                <FontAwesomeIcon
                                    icon={faUserPlus}
                                    color={theme.fontColor.whiteText}
                                />

                            </div>
                            <div className="userscreen-userContainer-inner-right-button" style={{backgroundColor:theme.fontColor.darkBlue}}>
                                <h3 style={{ color: theme.fontColor.whiteText }}>Add to Watch List</h3>
                                <FontAwesomeIcon
                                    icon={faPlusCircle}
                                    color={theme.fontColor.whiteText}
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="userscreen-filterContainer">
                <h3 style={{color:theme.fontColor.whiteText}}>
                    Contributions based on geography and/or on location
                </h3>
            </div>

        </div>
    )
}

export default User