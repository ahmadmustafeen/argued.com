import React from 'react'
import { theme } from '../../constants/theme'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const IconWithTitleCustom = props => {
    const {
        label = "label",
        icon = faEyeSlash,
    } = props
    return (
        <div className="IconWithTitleCustom-container">
            <h3>
                {label}
            </h3>
            <FontAwesomeIcon icon={icon} />
        </div>
    )
}
const DashboardVideoElement = props => {
    return (
        <div className="DashboardVideoElement-container">
            <div className="DashboardVideoElement-VideoContainer">

            </div>
            <div className="DashboardVideoElement-contentContainer">
                <div className="DashboardVideoElement-contentContainer-top">
                    <div className="DashboardVideoElement-contentContainer-top-img-container">

                    </div>
                    <div className="DashboardVideoElement-contentContainer-top-title">
                        <h4 style={{ color: theme.fontColor.whiteText }}>Lorem ipsum liorem ispum Lorem ipsum liorem ispum Lorem ipsum liorem ispum</h4>
                    </div>
                </div>
                <div className="DashboardVideoElement-contentContainer-bottom">
                    <div className="DashboardVideoElement-contentContainer-bottom-left">
                        <div className="DashboardVideoElement-contentContainer-bottom-left-left">
                            <div className="DashboardVideoElement-contentContainer-bottom-left-left-buttonContainer">
                                <IconWithTitleCustom />
                            </div>
                            <div className="DashboardVideoElement-contentContainer-bottom-left-left-buttonContainer">
                                <IconWithTitleCustom />

                            </div>

                        </div>
                        <div className="DashboardVideoElement-contentContainer-bottom-left-right">

                        </div>

                    </div>
                    <div className="DashboardVideoElement-contentContainer-bottom-right">
                    </div>
                </div>

            </div>
        </div>
    )
}

export { DashboardVideoElement }