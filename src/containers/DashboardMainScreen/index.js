import React from 'react'
import { DashboardVideoComponent } from '../../components'
import './style.css'


const DashboardMainScreen = props => {
    const {

    } = props

    return (
        <div className="DashboardMainScreen-container">
            <div className="DashboardMainScreen-component">
                <DashboardVideoComponent label="Latest Videos" />
                <DashboardVideoComponent label="Recent Videos" />
            </div>

        </div>
    )
}

export default DashboardMainScreen