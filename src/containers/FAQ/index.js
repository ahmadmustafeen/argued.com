import React, { useState } from 'react'
import './style.css'
import { theme } from '../../constants/theme'
import { CustomHeader } from '../MyContacts'
import { faChevronCircleRight, faUserFriends, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const FaqComponentDropDown = props => {
    const [visible, setVisible] = useState(false)
    const {
        question,
        answer
    } = props
    return (
        <div className="FaqComponentDropDown-mainContainer">
            <div className="FAQScreen-container-question">
                <div className="FAQScreen-container-question-question">
                    <h3 style={{ color: theme.fontColor.darkBlue }}>Lorem ipsum afds adasd asdasd asdsdasd</h3>
                </div>
                <div className="FAQScreen-container-question-iconContainer">
                    <FontAwesomeIcon
                    onClick={()=>setVisible(!visible)}
                        icon={faChevronCircleDown} color={theme.fontColor.darkBlue} />

                </div>
            </div>
          { <div className={`FAQScreen-container-answer ${visible&&"isvisible"}`}>
               <h4 style={{color:theme.fontColor.whiteText}}>
               Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
               Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
               </h4>
            </div>}
        </div>

    )
}

const FAQScreen = props => {
    return (
        <div className="FAQScreen-container">
            <CustomHeader
                icon={faUserFriends}
                buttonIcon={faChevronCircleRight}
                label="How can we help you?"
                buttonText="My Contact"
                searchIcon
            />

            <div className="FAQScreen-container-item">
            <FaqComponentDropDown />
            <FaqComponentDropDown />
            <FaqComponentDropDown />
            <FaqComponentDropDown />
                <FaqComponentDropDown />

            </div>
        </div>
    )
}

export default FAQScreen