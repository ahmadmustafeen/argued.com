import React from 'react'
import { theme } from '../../constants/theme'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash,faShareSquare ,faStar,faEye } from '@fortawesome/free-solid-svg-icons'

const IconWithTitleCustom = props => {
    const {
        style,
        label = "label",
        icon,
    } = props
    return (
        <div className="IconWithTitleCustom-container" style={style}>
            <h3>
                {label}
            </h3>
            {props.icon && <FontAwesomeIcon icon={icon} />}
        </div>
    )
}



const DashboardVideoElement = props => {
    return (
        <div className="DashboardVideoElement-container">
            <div className="DashboardVideoElement-VideoContainer">
                <img src={require("../../assets/testing.jpg").default} />

            </div>
            <div className="DashboardVideoElement-contentContainer">
                <div className="DashboardVideoElement-contentContainer-top">
                    <div className="DashboardVideoElement-contentContainer-top-img-container">
                        <img src={require("../../assets/testing.jpg").default} />

                    </div>
                    <div className="DashboardVideoElement-contentContainer-top-title">
                        <h4 style={{ color: theme.fontColor.whiteText }}>Lorem ipsum liorem ispum Lorem ipsum liorem ispum Lorem ipsum liorem ispum</h4>
                    </div>
                </div>
                <div className="DashboardVideoElement-contentContainer-bottom">
                    <div className="DashboardVideoElement-contentContainer-bottom-left">
                        <div className="DashboardVideoElement-contentContainer-bottom-left-left">
                            <div className="DashboardVideoElement-contentContainer-bottom-left-left-buttonContainer">
                                <IconWithTitleCustom icon={faShareSquare}
                                label="Show Videos"
                                />
                            </div>
                            <div className="DashboardVideoElement-contentContainer-bottom-left-left-buttonContainer">
                                <IconWithTitleCustom icon={faStar} 
                                label="Rate Videos"
                                />

                            </div>

                        </div>
                        <div className="DashboardVideoElement-contentContainer-bottom-left-right">
                            <div className="DashboardVideoElement-contentContainer-bottom-left-right-container">
                                <IconWithTitleCustom
                                label="First Amendment"
                                
                                style={{ justifyContent: 'flex-start', paddingLeft: '20px' }} />
                            </div>
                            <div className="DashboardVideoElement-contentContainer-bottom-left-right-container">
                                <IconWithTitleCustom
                                label="Freedom of speech"
                                style={{ justifyContent: 'flex-start', paddingLeft: '20px' }} />
                            </div>
                            <div className="DashboardVideoElement-contentContainer-bottom-left-right-container">
                                <IconWithTitleCustom
                                label="English"
                                style={{ justifyContent: 'flex-start', paddingLeft: '20px' }} />
                            </div>

                        </div>

                    </div>
                    <div className="DashboardVideoElement-contentContainer-bottom-right">
                        <div className="DashboardVideoElement-contentContainer-top-img-container">
                            <img src={require("../../assets/testing.jpg").default} />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export { DashboardVideoElement }