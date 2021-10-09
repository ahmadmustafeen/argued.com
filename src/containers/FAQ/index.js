import React from 'react'
import './style.css'
import {CustomHeader} from '../MyContacts'
import { faChevronCircleLeft, faUserFriends, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const FAQScreen = props => {
    return(
        <div className="FAQScreen-container">
<CustomHeader
                icon={faUserFriends}
                buttonIcon={faChevronCircleRight}
                label="How Can We Help You?"
                buttonText="My Contact"
                searchIcon
            />
        </div>
    )
}

export default FAQScreen