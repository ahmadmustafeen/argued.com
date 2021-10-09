import React from 'react'
import { theme } from '../../constants/theme'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faLightbulb, faTimesCircle } from '@fortawesome/free-solid-svg-icons'



const GeneralSuggestionModal = props => {

    return (
        <div className="TopicSuggestionModal GeneralSuggestionModal-container">
            <div className="TopicSuggestionModal-header">
                <FontAwesomeIcon icon={faLightbulb}
                    color={theme.fontColor.darkBlue}
                />
                <h3 style={{ color: theme.fontColor.whiteText }}>
                    General Suggestion
                </h3>
            </div>
            <div className="TopicSuggestionModal-content ">
               
                <div className="TopicSuggestionModal-content-input-container SubTopicModal-content-input-container">
                    <input placeholder="Title" />
                </div>
                <div className="TopicSuggestionModal-content-inputArea-container">
                <textarea rows="5" cols="50"   placeholder="suggestion"></textarea>
                </div>
                <div className="TopicSuggestionModal-content-button-container general-suggestion-button-container">
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


export { GeneralSuggestionModal }