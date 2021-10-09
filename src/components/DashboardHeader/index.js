import React from 'react'
import './style.css'
import {theme} from '../../constants/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faBars, faTimesCircl,  } from '@fortawesome/free-solid-svg-icons'



const DashboardHeader = props => {
    return (
        <div className="dashboardheader-container">
            <div className="dashboardheader-container-left">
                <div className="dashboardheader-container-left-top">
                    <div className="dashboardheader-container-left-top-icon">
                        <FontAwesomeIcon icon={faBars}
                            color={theme.fontColor.whiteText}
                        />
                    </div>
                    <div className="dashboardheader-container-left-top-img">
                        <img src={require("../../assets/logo-main.png").default} />

                    </div>
                </div>
                <div className="dashboardheader-container-left-bottom">
                    <h4 style={{color:theme.fontColor.darkBlue}}>Civil Arguments shapes the world we live in!</h4>

                </div>
            </div>
            <div className="dashboardheader-container-middle">

            </div>
            <div className="dashboardheader-container-right">

            </div>
        </div>
    )
}


export { DashboardHeader }