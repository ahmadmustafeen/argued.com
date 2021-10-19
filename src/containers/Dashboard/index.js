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
import ContactRequest from '../ContactRequest'
import GroupRequest from '../GroupRequest'
import ChatScreen from '../ChatScreen'
import User from '../User'
import { UseReduxHook } from '../../redux/customHooks/useReduxHook'
import { ActionWithoutPayload, ActionWithPayload } from '../../redux/actions'
import { DESTROY_MODAL, FETCH_CATEGORY, FETCH_FAQ, FETCH_LATEST_VIDEO, FETCH_PUBLIC_PLANS, FETCH_VIEWED_VIDEOS, SHOW_MODAL, SIGN_IN } from '../../redux/actionTypes'
import { WELCOME_MESSAGE_MODAL } from '../../constants/ModalNames'
import { Switch, Route,useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'


const Dashboard = props => {
    const [isVisible, setIsVisible] = useState(false)
    const { store, dispatch } = UseReduxHook()
    const { UiModalReducer } = store
const history = useHistory()
    useEffect(() => {
        setIsVisible(UiModalReducer?.isVisible)
        // dispatch(ActionWithoutPayload(FETCH_LATEST_VIDEO))
    }, [store])
    // useEffect(()=>{
    //     if(!store.UserProfileReducer?.token){
    //         toast("Login First")
    //         // history.push("/signin")
    //     }
     

    // },[])


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
                <Switch>
                    <Route path="/" exact component={DashboardMainScreen} />
                    <Route path="/contacts" component={MyContacts} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/groups" component={MyGroups} />
                    <Route path="/profile" component={MyProfile} />
                    <Route path="/contact_request" component={ContactRequest} />
                    <Route path="/group_request" component={GroupRequest} />
                    <Route path="/user" component={User} />
                </Switch>
                {/* <ChatScreen /> */}

            </div>
        </div>
        </>
    )
}


export default Dashboard