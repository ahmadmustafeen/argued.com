import React from 'react'
import { theme } from '../../constants/theme'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faFlag, faTimesCircle } from '@fortawesome/free-solid-svg-icons'



const ReportModal = props => {

    return (
        <div className="TopicSuggestionModal">
            <div className="TopicSuggestionModal-header">
                <FontAwesomeIcon icon={faFlag}
                    color={theme.fontColor.darkBlue}
                />
                <h3 style={{ color: theme.fontColor.whiteText }}>
                    Report
                </h3>
            </div>
            <div className="TopicSuggestionModal-content">
                <div className="TopicSuggestionModal-content-input-container">
                    <input placeholder="Subject" />
                </div>
                <div className="TopicSuggestionModal-content-button-container">
                    <div className="TopicSuggestionModal-content-button" style={{ backgroundColor: theme.fontColor.greyText }}>
                        <h4 style={{ color: theme.fontColor.whiteText }}>
                            Close
                        </h4>
                        <FontAwesomeIcon icon={faTimesCircle}
                            color={theme.fontColor.whiteText}
                        />
                    </div>
                    <div className="TopicSuggestionModal-content-button" style={{ backgroundColor: theme.fontColor.darkBlue }}>
                        <h4 style={{ color: theme.fontColor.whiteText }}>
                            Submit
                        </h4>
                        <FontAwesomeIcon icon={faChevronCircleRight}
                            color={theme.fontColor.whiteText}
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}


export { ReportModal }