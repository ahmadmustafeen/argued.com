import React, { useState } from 'react'
import './style.css'
import { theme } from '../../constants/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faCircle, faBars, faEye, faSearch, faChevronDown, faBriefcase, faUser, faBell } from '@fortawesome/free-solid-svg-icons'
import { Button, Popover, Typography } from '@material-ui/core'
import { UseReduxHook } from '../../redux/customHooks/useReduxHook'
import { ActionWithPayload } from '../../redux/actions'
import { CHANGE_SIDEBAR, SHOW_MODAL } from '../../redux/actionTypes'
import { NOTIFICATION_MODAL, REQUESTS_MODAL } from '../../constants/ModalNames'
import './popover.css'
import { useHistory } from 'react-router-dom';


const DashboardHeader = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        // setAnchorEl(id)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    // this here is the code of popover

    const { store, dispatch } = UseReduxHook()
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
const history = useHistory()
    const [state, setState] = useState("Videos")

    return (
        <div className="dashboardheader-container">
            <div className="dashboardheader-container-inner">
            <div className="dashboardheader-container-left">
                <div className="dashboardheader-container-left-top">
                    <div className="dashboardheader-container-left-top-icon">
                        <FontAwesomeIcon icon={faBars}
                        onClick={()=>dispatch(ActionWithPayload(CHANGE_SIDEBAR,!store?.SideBarReducer?.normal))}
                            color={theme.fontColor.whiteText}
                        />
                    </div>
                    <a className="dashboardheader-container-left-top-img" onClick={()=>history.push("/")}>
                        <img src={require("../../assets/logo-main.png").default} />

                    </a>
                </div>
                <div className="dashboardheader-container-left-bottom">
                    <h4 style={{ color: theme.fontColor.darkBlue }}>Civil Arguments shapes the world we live in!</h4>

                </div>
            </div>
            <div className="dashboardheader-container-middle">
                <div className="dashboardheader-container-middle-searchbar">
                    <div className="dashboardheader-container-middle-searchbar-container">
                        <div className="dashboardheader-container-middle-searchbar-container-left">
                            <h4 style={{ color: theme.fontColor.whiteText }}>
                                {state}
                            </h4>
                            <FontAwesomeIcon icon={faChevronDown}
                                color={theme.fontColor.darkBlue}
                                onClick={handleClick}
                            />

                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                style={{backgroundColor:'transparent'}}
                            >
                                <div className="open-type-search-popover">
                                    <div className="open-type-search-popover-item">
                                        <div className="CustomRadioButton-icon popover-radiobutton">
                                            <FontAwesomeIcon
                                                icon={faCircle}
                                                onClick={() => setState("Videos")}
                                                color={state === 'Videos' ? "white" : "transparent"} />
                                        </div>
                                        <h3 style={{ color: theme.fontColor.whiteText }}>Videos</h3>
                                    </div>
                                    <div className="open-type-search-popover-item">
                                        <div className="CustomRadioButton-icon popover-radiobutton">
                                            <FontAwesomeIcon
                                                icon={faCircle}
                                                onClick={() => setState("Find Presenter")}
                                                color={state === 'Find Presenter' ? "white" : "transparent"} />
                                        </div>
                                        <h3 style={{ color: theme.fontColor.whiteText }}>Find Presenter</h3>
                                    </div>
                                    <div className="open-type-search-popover-item">
                                        <div className="CustomRadioButton-icon popover-radiobutton">
                                            <FontAwesomeIcon
                                                icon={faCircle}
                                                onClick={() => setState("Contacts")}
                                                color={state === 'Contacts' ? "white" : "transparent"} />
                                        </div>
                                        <h3 style={{ color: theme.fontColor.whiteText }}>Contacts</h3>
                                    </div>
                                    <div className="open-type-search-popover-item">
                                        <div className="CustomRadioButton-icon popover-radiobutton">
                                            <FontAwesomeIcon
                                                icon={faCircle}
                                                onClick={() => setState("Groups")}
                                                color={state === 'Groups' ? "white" : "transparent"} />
                                        </div>
                                        <h3 style={{ color: theme.fontColor.whiteText }}>Groups</h3>
                                    </div>


                                </div>
                            </Popover>
                        </div>
                        <div className="dashboardheader-container-middle-searchbar-container-middle">
                            <input
                                style={{ color: theme.fontColor.whiteText }}
                                placeholder="Type anything here..." />
                        </div>
                        <div className="dashboardheader-container-middle-searchbar-container-right">
                            <FontAwesomeIcon icon={faSearch}
                                color={theme.fontColor.darkBlue}
                            />


                        </div>
                    </div>

                </div>
                <div className="dashboardheader-container-middle-icons">
                    <div className="dashboardheader-container-middle-icons-left">
                        <FontAwesomeIcon
                            icon={faEye}
                            color={theme.fontColor.greyText}
                        />
                        <FontAwesomeIcon
                            icon={faBriefcase}
                            color={theme.fontColor.greyText}

                        />
                    </div>
                    <div className="dashboardheader-container-middle-icons-right">
                        <div className="dashboardheader-container-middle-icons-right-imgContainer">

                        </div>
                    </div>
                </div>
                <div className="dashboardheader-container-middle-activity">
                    <h4 style={{ color: theme.fontColor.whiteText }}>Activity 7%</h4>
                    <div className="dashboardheader-container-middle-activity-mainContainer">
                        <div className="dashboardheader-container-middle-activity-mainContainer-filler" style={{ width: '17%' }}>

                        </div>

                    </div>
                </div>

            </div>
            <div className="dashboardheader-container-right">
                <div className="dashboardheader-container-right-left">
                    <div className="dashboardheader-container-right-left-iconContainer">
                        <FontAwesomeIcon
                            onClick={() => dispatch(ActionWithPayload(SHOW_MODAL, { screenName: REQUESTS_MODAL }))}
                            icon={faUser}
                            color={theme.fontColor.whiteText}
                        />
                        <div className="dashboardheader-container-right-left-iconContainer-counterContainer" style={{ backgroundColor: theme.fontColor.darkBlue }}>
                            <h5 style={{ color: theme.fontColor.whiteText }}>2</h5>

                        </div>
                    </div>
                    <div className="dashboardheader-container-right-left-iconContainer">
                        <FontAwesomeIcon
                            onClick={() => dispatch(ActionWithPayload(SHOW_MODAL, { screenName: NOTIFICATION_MODAL }))}
                            icon={faBell}
                            color={theme.fontColor.whiteText}
                        />
                        <div className="dashboardheader-container-right-left-iconContainer-counterContainer" style={{ backgroundColor: theme.fontColor.darkBlue }}>
                            <h5 style={{ color: theme.fontColor.whiteText }}>2</h5>

                        </div>
                    </div>

                </div>
                <div className="dashboardheader-container-right-right">
                    <div className="dashboardheader-container-right-right-imgContainer">
                        <div className="dashboardheader-container-right-right-img">
                            <img src={require("../../assets/testing.jpg").default} />

                        </div>
                    </div>
                    <div className="dashboardheader-container-right-right-nameContainer">
                        <h3 style={{ color: theme.fontColor.whiteText }}>Welcome back</h3>
                        <h4 style={{ color: theme.fontColor.whiteText }}>Ester Harvard</h4 >

                    </div>
                </div>
            </div>
            </div>
           
        </div>
    )
}


export { DashboardHeader }