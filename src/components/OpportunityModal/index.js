import React from 'react'
import { theme } from '../../constants/theme'
import './style.css'



const OpportunityModal = props => {
    return (
        <div className="OpportunityModal">
            <h3 style={{color:theme.fontColor.darkBlue}}>
            Opportunity Knocks
            </h3>
            <h4 style={{color:theme.fontColor.darkBlue}}>
                Stand out from the crowd and own this space by being amound the first!
            </h4>
        </div>
    )
}

export {OpportunityModal}