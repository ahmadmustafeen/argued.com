import React from 'react'
import './style.css'
import { theme } from '../../constants/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faBars, faEye, faSearch, faChevronDown, faBriefcase, faUser, faBell } from '@fortawesome/free-solid-svg-icons'
import { Button, Popover, Typography } from '@material-ui/core'


const DashboardHeader = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    // this here is the code of popover
    {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
  Open Popover
</Button>
<Popover
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
>
<Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
</Popover>
  */}
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="dashboardheader-container">
            <div className="dashboardheader-container-left">
                <div className="dashboardheader-container-left-top">
                    <div className="dashboardheader-container-left-top-icon">
                        <FontAwesomeIcon icon={faBars}
                            color={theme.fontColor.whiteText}
                        />
                    </div>
                    <div className="dashboardheader-container-left-top-img">
                        <img src={require("../../assets/logo-main.png").default} />

                    </div>
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
                                Videos
                            </h4>
                            <FontAwesomeIcon icon={faChevronDown}
                                color={theme.fontColor.darkBlue}
                            />
                        </div>
                        <div className="dashboardheader-container-middle-searchbar-container-middle">
                            <input
                                style={{ color: theme.fontColor.whiteText }}
                                placeholder="Type anything here" />
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
                            icon={faUser}
                            color={theme.fontColor.whiteText}
                        />
                        <div className="dashboardheader-container-right-left-iconContainer-counterContainer" style={{ backgroundColor: theme.fontColor.darkBlue }}>
                            <h5 style={{ color: theme.fontColor.whiteText }}>2</h5>

                        </div>
                    </div>
                    <div className="dashboardheader-container-right-left-iconContainer">
                        <FontAwesomeIcon
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
    )
}


export { DashboardHeader }