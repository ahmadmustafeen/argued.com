import React from 'react'
import './style.css'
import { WelcomeModal,NotificationModal,RequestModal,OpportunityModal,TopicSuggestionModal,SubTopicModal } from '../'


const AppModal = props => {
    return (
        <div className="AppModal">
{/* <WelcomeModal /> */}

{/* <NotificationModal /> */}
{/* <RequestModal/> */}
{/* <OpportunityModal /> */}
{/* <TopicSuggestionModal/> */}
<SubTopicModal />
        </div>
    )
} 


export  {AppModal}