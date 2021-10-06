import React from 'react'
import {
    Sidebar
} from '../../components'
import './style.css'
import DashboardMainScreen from '../DashboardMainScreen'


const Dashboard = props => {
    return (
        <div className={"dashboard-container"}>
            <Sidebar />
            <div className={"dashboard-content"}>
                <DashboardMainScreen/>

            </div>
        </div>
    )
}


export default Dashboard