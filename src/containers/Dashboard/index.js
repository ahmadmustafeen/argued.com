import React from 'react'
import {
    Sidebar
} from '../../components'
import './style.css'
import DashboardMainScreen from '../DashboardMainScreen'
import MyContacts from '../MyContacts'
import FAQ from '../FAQ'


const Dashboard = props => {
    return (
        <div className={"dashboard-container"}>
            <Sidebar />
            <div className={"dashboard-content"}>
                {/* <DashboardMainScreen/> */}
                {/* <MyContacts /> */}
                <FAQ />

            </div>
        </div>
    )
}


export default Dashboard