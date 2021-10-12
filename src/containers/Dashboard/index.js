import React, { useEffect, useState } from 'react'
import {
    AppModal,
    Sidebar,
    DashboardHeader
} from '../../components'
import './style.css'
import DashboardMainScreen from '../DashboardMainScreen'
import MyContacts from '../MyContacts'
import FAQ from '../FAQ'
import MyGroups from '../MyGroups'
import MyProfile from '../MyProfile'
import ChatScreen from '../ChatScreen'
import { UseReduxHook } from '../../redux/customHooks/useReduxHook'
import { ActionWithoutPayload, ActionWithPayload } from '../../redux/actions'
import { DESTROY_MODAL, FETCH_CATEGORY, FETCH_LATEST_VIDEO, FETCH_PUBLIC_PLANS, SHOW_MODAL, SIGN_IN } from '../../redux/actionTypes'
import { WELCOME_MESSAGE_MODAL } from '../../constants/ModalNames'
import { Switch, Route } from 'react-router-dom'


const Dashboard = props => {
    const [isVisible, setIsVisible] = useState(false)
    const { store, dispatch } = UseReduxHook()
    const { UiModalReducer } = store

    useEffect(() => {
        setIsVisible(UiModalReducer?.isVisible)
        // dispatch(ActionWithoutPayload(FETCH_CATEGORY))
    }, [store])
    useEffect(()=>{
        // dispatch(ActionWithoutPayload(FETCH_CATEGORY))
        // dispatch(ActionWithPayload(FETCH_LATEST_VIDEO,{id:"5e3aa7559d265a745118f48e"}))
        // dispatch(ActionWithPayload(SIGN_IN,{username:"5e3aa7559d265a745118f48e",password:"sasdasd"}))
        dispatch(ActionWithoutPayload(FETCH_PUBLIC_PLANS))


    },[])


    //this calls modal to be shown
    // useState(() => {
    //     setTimeout(() => {
    //         dispatch(ActionWithPayload(SHOW_MODAL, { screenName: WELCOME_MESSAGE_MODAL }))
    //     }, 2000)
    //     setTimeout(() => {
    //         dispatch(ActionWithoutPayload(DESTROY_MODAL))
    //     }, 6000)
    // }, [])





    return (
        <>
            <DashboardHeader />

        <div className={"dashboard-container"}>
            {isVisible && <AppModal />}

            <Sidebar />
            <div className={"dashboard-content"}>
                {/* <Switch>
                    <Route path="/" exact component={DashboardMainScreen} />
                    <Route path="/contacts" component={MyContacts} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/groups" component={MyGroups} />
                    <Route path="/profile" component={MyProfile} />
                </Switch> */}
                <ChatScreen />

            </div>
        </div>
        </>
    )
}


export default Dashboard