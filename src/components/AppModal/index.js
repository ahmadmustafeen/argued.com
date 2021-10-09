import React from 'react'
import './style.css'
import {WelcomeModal} from '../'
import { NotificationModal } from '../'


const AppModal = props => {
    return (
        <div className="AppModal">
{/* <WelcomeModal /> */}
<NotificationModal />
        </div>
    )
} 


export  {AppModal}