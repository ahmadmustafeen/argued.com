import React from 'react'
import { theme } from '../../constants/theme'
import './style.css'
import {DashboardVideoElement} from '../'


const DashboardVideoComponent = props => {
    const {
        label
    } = props
    return (
        <div className="DashboardVideoComponent">
            <div className="DashboardVideoComponent-header">
                <h3 style={{color:theme.fontColor.greyText}}>
                    {label}
                </h3>
            </div>
            <div className="DashboardVideoComponent-content">
                {
                    ["","","","","",""].map(item=>{
                        return(
                            <div className="DashboardVideoComponent-element">
                            <DashboardVideoElement />
                            </div>
                        )
                    })
                }
              
            </div>
        </div>
    )
}
export { DashboardVideoComponent }