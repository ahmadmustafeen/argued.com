import React from 'react'
import './style.css'
import { WelcomeModal,NotificationModal,RequestModal,OpportunityModal,TopicSuggestionModal } from '../'


const AppModal = props => {
    return (
        <div className="AppModal">
{/* <WelcomeModal /> */}

{/* <NotificationModal /> */}
{/* <RequestModal/> */}
{/* <OpportunityModal /> */}
<TopicSuggestionModal/>
        </div>
    )
} 


export  {AppModal}