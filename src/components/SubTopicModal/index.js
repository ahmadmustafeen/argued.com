import React from 'react'
import { theme } from '../../constants/theme'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faPlusSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons'



const SubTopicModal = props => {

    return (
        <div className="TopicSuggestionModal SubTopicModal">
            <div className="TopicSuggestionModal-header">
                <FontAwesomeIcon icon={faPlusSquare}
                    color={theme.fontColor.darkBlue}
                />
                <h3 style={{ color: theme.fontColor.whiteText }}>
                    Suggest a Sub topic
                </h3>
            </div>
            <div className="TopicSuggestionModal-content SubTopicModal-content">
                <div className="TopicSuggestionModal-content-input-container SubTopicModal-content-input-container">
                    <input placeholder="Topic Name" />
                </div>
                <div className="TopicSuggestionModal-content-input-container">
                    <input placeholder="Sub Topic Name" />
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


export { SubTopicModal }