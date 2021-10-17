import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { theme } from '../../constants/theme'
import { SidebarComponent } from '../../components'

const SelectTopicModal = props => {
    return (
        <div className="selectTopicModal">
            <div className="selectTopicModal-header">
                <div className="selectTopicModal-header-left">
                    <h3 style={{ color: theme.fontColor.whiteText }}>
                        Topics
                    </h3>

                </div>
                <div className="selectTopicModal-header-right">
                    <div className="selectTopicModal-header-right-iconContainer" >

                        <FontAwesomeIcon icon={faSearch}
                            color={theme.fontColor.darkBlue}
                        />
                    </div>
                    <div className="selectTopicModal-header-right-iconContainer"  >

                        <FontAwesomeIcon icon={faThLarge}
                            color={theme.fontColor.darkBlue}
                        />
                    </div>

                </div>
            </div>
            <div className="selectTopicModal-content">
                <div className="selectTopicModal-content-inner">
                    {
                        [{ label: "first ammemdement" }, { label: "first ammemdement" }, { label: "first ammemdement" }, { label: "first ammemdement" }, { label: "first ammemdement" }].map(item => {
                            return (
                                <div className="selectTopicModal-content-inner-item">
                                    <SidebarComponent label={item.label}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export { SelectTopicModal }