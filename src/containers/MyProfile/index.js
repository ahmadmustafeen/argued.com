import React from 'react'
import './style.css'

import { CustomHeader } from '../MyContacts'
import { theme } from '../../constants/theme'
import {  faChevronCircleRight, faUser, faUserFriends, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MyProfile = props => {
    return (
        <div className="profilePageContainer">
          <CustomHeader
                icon={faUser}
                noButton
                buttonIcon={faChevronCircleRight}
                label="My Profile"
                buttonText="Create Group"
            /> 

        </div>
    )
}

export default MyProfile