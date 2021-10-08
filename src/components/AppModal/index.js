import React from 'react'
import './style.css'
import { WelcomeModal,NotificationModal,RequestModal } from '../'


const AppModal = props => {
    return (
        <div className="AppModal">
{/* <WelcomeModal /> */}

{/* <NotificationModal /> */}
<RequestModal/>
        </div>
    )
} 


export  {AppModal}