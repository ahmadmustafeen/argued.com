import React, { useState } from 'react'
import { AdditionalSidebar, SidebarComponent } from '../'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faChartLine, faChevronRight, faCloud, faEye, faFileContract, faUsers, } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { UseReduxHook } from '../../redux/customHooks/useReduxHook'
import { theme } from '../../constants/theme'
import { ActionWithPayload } from '../../redux/actions'
import { CHANGE_SIDEBAR, SHOW_MODAL } from '../../redux/actionTypes'



const DATA = [
    { label: "First Amendmend " },
    { label: "Second Amendmend " },
    { label: "Third Amendmend " },
    { label: "Fourth Amendmend " },
    { label: "Fifth Amendmend " },
    { label: "Third Amendmend " },
    { label: "Fourth Amendmend " },
    { label: "Fifth Amendmend " },
    { label: "Third Amendmend " },
    { label: "Fourth Amendmend " },
    { label: "Fifth Amendmend " },
    { label: "Third Amendmend " },
    { label: "Fourth Amendmend " },
    { label: "Fifth Amendmend " },
    { label: "Third Amendmend " },
    { label: "Fourth Amendmend " },
    { label: "Fifth Amendmend " },
    { label: "Third Amendmend " },
    { label: "Fourth Amendmend " },
    { label: "Fifth Amendmend " },
    { label: "Sixth Amendmend " }]






const Sidebar = props => {
    const [showsidebar, setShowsidebar] = useState()
    const [selectedData, setSelectedData] = useState("")


    // const { store, dispatch } = UseReduxHook()
    const {SideBarReducer,CategoryReducer} = useSelector((store)=>{
        return{
            SideBarReducer:store.SideBarReducer,
            CategoryReducer:store.CategoryReducer,
        }
    })

    console.log(SideBarReducer, "SIDEBAR")
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
        <>
         <div className="sidebar-container" >
          
          <div className={"sidebar-component-container"}>  {CategoryReducer?.map(item => {
                return (
                    <SidebarComponent {...item} selectedComponent={selectedData === item.name} onClick={() => onClickImage(item.name)} />
                )
            })}
            </div>
            <AdditionalSidebar
                onClick={() => onClickImage("", true)}
                visible={showsidebar} data={CategoryReducer.find(item=>item.name===selectedData)?.subcategories} />
            {/* <button onClick={()=>setShowsidebar(!showsidebar)}>asdasd</button> */}
        </div> 
                <a className="custom-sideBar-container" 
                
                //  onPointerOver={() => dispatch(ActionWithPayload(CHANGE_SIDEBAR, !store?.SideBarReducer?.normal))}
                 >
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
                        <a className="custom-sideBar" onClick={() => history.push("/")}>
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
                        <a className="custom-sideBar" onClick={() => history.push("/contacts")}>
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
                        <a className="custom-sideBar" onClick={() => history.push("/groups")}>
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
                </a>
                </>
        )
}


export { Sidebar }