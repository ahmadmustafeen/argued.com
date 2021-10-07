import React from 'react'
import { theme } from '../../constants/theme'
import './style.css'


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

                            </div>
                            <div className="DashboardVideoElement-contentContainer-bottom-left-left-buttonContainer">

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