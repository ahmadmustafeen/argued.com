import React from 'react'
import './style.css'
import { theme } from '../../constants/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faBars, faTimesCircl, faSearch, faChevronDown, } from '@fortawesome/free-solid-svg-icons'
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

                </div>
                <div className="dashboardheader-container-middle-activity">

                </div>

            </div>
            <div className="dashboardheader-container-right">

            </div>
        </div>
    )
}


export { DashboardHeader }