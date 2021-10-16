import React from 'react'
import './style.css'
import { theme } from '../../constants/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserFriends, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
export const CustomHeader = props => {
    const {
        icon,
        label,
        searchIcon,
        buttonText,
        onClick,
        buttonIcon,
        noButton
    } = props
    return (
        <div className="MyContacts-container-header-container">
            <div className="MyContacts-container-header-container-left">
                <FontAwesomeIcon

                    icon={icon}
                    color={theme.fontColor.darkBlue}
                />
                <h2 style={{ color: theme.fontColor.whiteText }}>{label}</h2>

            </div>
          {noButton||  <div className="MyContacts-container-header-container-right" style={searchIcon && { width: 'fit-content' }}>
                {searchIcon ? (
                    <div className="MyContactscomponent-searchBar-container" >
                        <input placeHolder="Search Here" />
                        <div className="MyContactscomponent-searchBar-container-icon" >
                            <FontAwesomeIcon

                                icon={faSearch}
                                color={theme.fontColor.darkBlue}
                            />
                        </div>
                    </div>
                ) : (
                    <a href="" className="MyContacts-container-header-container-right-button-container" style={{ backgroundColor: theme.fontColor.darkBlue }}>
                        <h4 style={{ color: theme.fontColor.whiteText }}>
                            {buttonText}
                        </h4>
                        <FontAwesomeIcon

                            icon={buttonIcon}
                            color={theme.fontColor.whiteText}
                        />
                    </a>
                )}

            </div>}
        </div>
    )
}



const ContactTables = props => {
    const {
        name,
        date_connected
    } = props
    return (
        <div className="contacttables-container">
            <div className="contacttables-container-img">
                <div className="contacttables-container-img-container">
                    <img src={require("../../assets/testing.jpg").default} />
                </div>

            </div>
            <div className="contacttables-container-name">
                <h4 style={{ color: theme.fontColor.whiteText }}>{name}</h4>
            </div>
            <div className="contacttables-container-connected">
                <h2 style={{ color: theme.fontColor.greyText }}>Date Connected</h2>
                <h3 style={{ color: theme.fontColor.whiteText }}>{date_connected}</h3>
            </div>
            <div className="contacttables-container-connected">
                <h2 style={{ color: theme.fontColor.greyText }}>Date Connected</h2>
                <h3 style={{ color: theme.fontColor.whiteText }}>{date_connected}</h3>
            </div>
            <div className="contacttables-container-icon">
                <div className="contacttables-container-icon-container">
                    <h4 style={{ color: theme.fontColor.whiteText }}>4</h4>
                </div>
            </div>

        </div>
    )
}

const MyContacts = props => {
    return (
        <div className="MyContacts-container">

            <CustomHeader
                icon={faUserFriends}
                buttonIcon={faChevronCircleRight}
                label="My Contacts"
                buttonText="My Contact"
            />

            <div className="MyContacts-table-container">
                <div className="MyContacts-table-row">
                    <ContactTables
                        name="Guy Hawkins"
                        date_connected="17, Oct 2020"
                    />
                </div>
                <div className="MyContacts-table-row">
                    <ContactTables
                        name="Guy Hawkins"
                        date_connected="17, Oct 2020"
                    />
                </div>
                <div className="MyContacts-table-row">
                    <ContactTables
                        name="Guy Hawkins"
                        date_connected="17, Oct 2020"
                    />
                </div>
                <div className="MyContacts-table-row">
                    <ContactTables
                        name="Guy Hawkins"
                        date_connected="17, Oct 2020"
                    />
                </div>
                <div className="MyContacts-table-row">
                    <ContactTables
                        name="Guy Hawkins"
                        date_connected="17, Oct 2020"
                    />
                </div>


            </div>

        </div>
    )
}

export default MyContacts