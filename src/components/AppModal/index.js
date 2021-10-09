import React from 'react'
import './style.css'
import { WelcomeModal, NotificationModal, RequestModal, OpportunityModal, TopicSuggestionModal, SubTopicModal, ReportModal, GeneralSuggestionModal } from '../'
import { UseReduxHook } from '../../redux/customHooks/useReduxHook'
import {WELCOME_MESSAGE_MODAL} from '../../constants/ModalNames'


const AppModal = props => {

const GettingCorrectModal = props =>{
    const {store,dispatch} = UseReduxHook()
    const {UiModalReducer} = store
    switch(UiModalReducer.screenName){
        case WELCOME_MESSAGE_MODAL: 
            return <WelcomeModal />
        default :
            return <h3>NOT FOUND</h3>
    }
}
    return (
        <div className="AppModal">
            <GettingCorrectModal />
            {/* <WelcomeModal /> */}

            {/* <NotificationModal /> */}
            {/* <RequestModal/> */}
            {/* <OpportunityModal /> */}
            {/* <TopicSuggestionModal/> */}
            {/* <SubTopicModal /> */}
            {/* <ReportModal /> */}
            {/* <GeneralSuggestionModal /> */}
        </div>
    )
}


export { AppModal }