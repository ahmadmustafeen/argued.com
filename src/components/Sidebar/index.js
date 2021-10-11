import React, { useState } from 'react'
import { AdditionalSidebar, SidebarComponent } from '../'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faChartLine, faChevronRight, faCloud, faEye, faFileContract, faUsers, } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

import { UseReduxHook } from '../../redux/customHooks/useReduxHook'
import { theme } from '../../constants/theme'



const DATA = [
    { label: "First Amendmend " },
    { label: "Second Amendmend " },
    { label: "Third Amendmend " },
    { label: "Fourth Amendmend " },
    { label: "Fifth Amendmend " },
    { label: "Sixth Amendmend " }]






const Sidebar = props => {
    const [showsidebar, setShowsidebar] = useState()
    const [selectedData, setSelectedData] = useState("")


    const { store, dispatch } = UseReduxHook()

    console.log(store.SideBarReducer, "SIDEBAR")
    const onClickImage = (label, override = false) => {
        if (override) {
            setSelectedData("")
            setShowsidebar(false)
        }
        if (selectedData === label || selectedData === "") {
            if (selectedData === '') { setSelectedData(label) }
            else {
                setSelectedData("")

            }
            setShowsidebar(showsidebar => { return !showsidebar })
        }
        else {
            setSelectedData(label)

        }
    }
    
  const history = useHistory();
    return (
        (store.SideBarReducer.normal ? <div className="sidebar-container" >
            {DATA.map(item => {
                return (
                    <SidebarComponent {...item} selectedComponent={selectedData === item.label} onClick={() => onClickImage(item.label)} />
                )
            })}
            <AdditionalSidebar
                onClick={() => onClickImage("", true)}
                visible={showsidebar} data={selectedData} />
            {/* <button onClick={()=>setShowsidebar(!showsidebar)}>asdasd</button> */}
        </div> :
            <div className="custom-sideBar-container">
                <div className="custom-sideBar">
                    <FontAwesomeIcon icon={faEye}
                        color={theme.fontColor.whiteText}
                    />
                    <h3 style={{ color: theme.fontColor.whiteText }}>
                        Viewers
                    </h3>
                    <FontAwesomeIcon icon={faChevronRight}
                        color={theme.fontColor.whiteText}
                    />
                </div>
                <div className="custom-sideBar-box">
                    <a className="custom-sideBar"  onClick={()=>history.push("/")}>
                        <FontAwesomeIcon icon={faChartLine}
                            color={theme.fontColor.whiteText}
                        />
                        <h3 style={{ color: theme.fontColor.whiteText }}>
                            Dashboard
                        </h3>
                        <FontAwesomeIcon icon={faChevronRight}
                            color={theme.fontColor.whiteText}
                        />
                    </a>
                    <a className="custom-sideBar"  onClick={()=>history.push("/contacts")}>
                        <FontAwesomeIcon icon={faAddressBook}
                       
                            color={theme.fontColor.whiteText}
                        />
                        <h3 style={{ color: theme.fontColor.whiteText }}>
                            My Contacts
                        </h3>
                        <FontAwesomeIcon icon={faChevronRight}
                            color={theme.fontColor.whiteText}
                        />
                    </a>
                    <a className="custom-sideBar"   onClick={()=>history.push("/groups")}>
                        <FontAwesomeIcon icon={faUsers}
                            color={theme.fontColor.whiteText}
                        />
                        <h3 style={{ color: theme.fontColor.whiteText }}>
                            My Group
                        </h3>
                        <FontAwesomeIcon icon={faChevronRight}
                            color={theme.fontColor.whiteText}
                        />
                    </a>
                </div>
                <div className="custom-sideBar">
                    <FontAwesomeIcon icon={faCloud}
                        color={theme.fontColor.whiteText}
                    />
                    <h3 style={{ color: theme.fontColor.whiteText }}>
                        Become a Presenter
                    </h3>
                    <FontAwesomeIcon icon={faChevronRight}
                        color={theme.fontColor.whiteText}
                    />
                </div>
                <div className="custom-sideBar">
                    <FontAwesomeIcon icon={faCloud}
                        color={theme.fontColor.whiteText}
                    />
                    <h3 style={{ color: theme.fontColor.whiteText }}>
                        Help us Help us
                    </h3>
                    <FontAwesomeIcon icon={faChevronRight}
                        color={theme.fontColor.whiteText}
                    />
                </div>
            </div>)
    )
}


export { Sidebar }