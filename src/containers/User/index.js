import { theme } from '../../constants/theme'
import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faPlusCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { DashboardVideoComponent } from '../../components'
import { MenuItem, Select } from '@mui/material';

const User = props => {
    return (
        <div className="userscreen-container">
            <div className="userscreen-userContainer" style={{ backgroundImage: `url(${require("../../assets/testing.jpg").default})` }}>
                <div className="userscreen-userContainer-inner">
                    <div className="userscreen-userContainer-inner-left">
                        <img src={require("../../assets/testing.jpg").default} />

                    </div>
                    <div className="userscreen-userContainer-inner-right">
                        <h3 style={{ color: theme.fontColor.whiteText }}>Jane Cooper</h3>
                        <h4 style={{ color: theme.fontColor.whiteText }}>{`3 Viewers | 4 Videos`}</h4>
                        <div className="userscreen-userContainer-inner-right-buttonContainer">
                            <div className="userscreen-userContainer-inner-right-button" style={{ backgroundColor: theme.fontColor.darkBlue }}>
                                <h3 style={{ color: theme.fontColor.whiteText }}>Contacts</h3>
                                <FontAwesomeIcon
                                    icon={faUserPlus}
                                    color={theme.fontColor.whiteText}
                                />

                            </div>
                            <div className="userscreen-userContainer-inner-right-button" style={{ backgroundColor: theme.fontColor.darkBlue }}>
                                <h3 style={{ color: theme.fontColor.whiteText }}>Add to Watch List</h3>
                                <FontAwesomeIcon
                                    icon={faPlusCircle}
                                    color={theme.fontColor.whiteText}
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="userscreen-filterContainer">
                <h3 style={{ color: theme.fontColor.whiteText }}>
                    Contributions based on geography and/or on location
                </h3>
                <div className="userscreen-filterContainer-inner">
                    <div className="userscreen-filterContainer-inner-row">

                        <div className="userscreen-filterContainer-inner-row-element">
                            <h3 style={{ color: theme.fontColor.darkBlue }}>Country</h3>
                            <div className="userscreen-filterContainer-inner-row-element-select-display">
                                <div className="userscreen-filterContainer-inner-row-element-select-display-text">
                                    <h3 style={{color:theme.fontColor.whiteText}}>Seomthing</h3>
                                </div>
                                <div className="userscreen-filterContainer-inner-row-element-select-display-icon">
                                    <Select
                                        value={"age"}
                                        label="Age"
                                        onChange={(e) => console.log(e)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>
                            </div>


                        </div>
                        <div className="userscreen-filterContainer-inner-row-element">
                            <h3 style={{ color: theme.fontColor.darkBlue }}>State</h3>
                            <div className="userscreen-filterContainer-inner-row-element-select-display">
                                <div className="userscreen-filterContainer-inner-row-element-select-display-text">
                                    <h3 style={{color:theme.fontColor.whiteText}}>Seomthing</h3>
                                </div>
                                <div className="userscreen-filterContainer-inner-row-element-select-display-icon">
                                    <Select
                                        value={"age"}
                                        label="Age"
                                        onChange={(e) => console.log(e)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>
                            </div>


                        </div>
                        <div className="userscreen-filterContainer-inner-row-element">
                            <h3 style={{ color: theme.fontColor.darkBlue }}>City</h3>
                            <div className="userscreen-filterContainer-inner-row-element-select-display">
                                <div className="userscreen-filterContainer-inner-row-element-select-display-text">
                                    <h3 style={{color:theme.fontColor.whiteText}}>Seomthing</h3>
                                </div>
                                <div className="userscreen-filterContainer-inner-row-element-select-display-icon">
                                    <Select
                                        value={"age"}
                                        label="Age"
                                        onChange={(e) => console.log(e)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="userscreen-filterContainer-inner-row">

                        <div className="userscreen-filterContainer-inner-row-element">
                            <h3 style={{ color: theme.fontColor.darkBlue }}>Topic</h3>
                            <div className="userscreen-filterContainer-inner-row-element-select-display">
                                <div className="userscreen-filterContainer-inner-row-element-select-display-text">
                                    <h3 style={{color:theme.fontColor.whiteText}}>Seomthing</h3>
                                </div>
                                <div className="userscreen-filterContainer-inner-row-element-select-display-icon">
                                    <Select
                                        value={"age"}
                                        label="Age"
                                        onChange={(e) => console.log(e)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>
                            </div>


                        </div>
                        <div className="userscreen-filterContainer-inner-row-element">
                            <h3 style={{ color: theme.fontColor.darkBlue }}>Sub Topic</h3>
                            <div className="userscreen-filterContainer-inner-row-element-select-display">
                                <div className="userscreen-filterContainer-inner-row-element-select-display-text">
                                    <h3 style={{color:theme.fontColor.whiteText}}>Seomthing</h3>
                                </div>
                                <div className="userscreen-filterContainer-inner-row-element-select-display-icon">
                                    <Select
                                        value={"age"}
                                        label="Age"
                                        onChange={(e) => console.log(e)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <div className="DashboardMainScreen-component">
            <DashboardVideoComponent />

            </div>




        </div>
    )
}

export default User