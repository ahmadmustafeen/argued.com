import React from 'react'
import './style.css'
import { WelcomeModal, NotificationModal, RequestModal, OpportunityModal,
    SelectTopicModal, TopicSuggestionModal, SubTopicModal, ReportModal, GeneralSuggestionModal } from '../'
import { UseReduxHook } from '../../redux/customHooks/useReduxHook'
import { NOTIFICATION_MODAL, REQUESTS_MODAL, WELCOME_MESSAGE_MODAL } from '../../constants/ModalNames'


const AppModal = props => {

    const GettingCorrectModal = props => {
        const { store, dispatch } = UseReduxHook()
        const { UiModalReducer } = store
        switch (UiModalReducer.screenName) {
            case WELCOME_MESSAGE_MODAL:
                return <WelcomeModal />
            case REQUESTS_MODAL:
                return <RequestModal />
            case NOTIFICATION_MODAL:
                return <NotificationModal />
            default:
                return <SelectTopicModal />
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