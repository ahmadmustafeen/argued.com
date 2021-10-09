import React from 'react'
import './style.css'
import { WelcomeModal, NotificationModal, RequestModal, OpportunityModal, TopicSuggestionModal, SubTopicModal, ReportModal, GeneralSuggestionModal } from '../'


const AppModal = props => {
    return (
        <div className="AppModal">
            {/* <WelcomeModal /> */}

            {/* <NotificationModal /> */}
            {/* <RequestModal/> */}
            {/* <OpportunityModal /> */}
            {/* <TopicSuggestionModal/> */}
            {/* <SubTopicModal /> */}
            {/* <ReportModal /> */}
            <GeneralSuggestionModal />
        </div>
    )
}


export { AppModal }