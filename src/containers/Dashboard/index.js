import React, { useEffect, useState } from 'react'
import {
    AppModal,
    Sidebar
} from '../../components'
import './style.css'
import DashboardMainScreen from '../DashboardMainScreen'
import MyContacts from '../MyContacts'
import FAQ from '../FAQ'
import MyGroups from '../MyGroups'
import { UseReduxHook } from '../../redux/customHooks/useReduxHook'
import { ActionWithoutPayload, ActionWithPayload } from '../../redux/actions'
import { DESTROY_MODAL, SHOW_MODAL } from '../../redux/actionTypes'
import { WELCOME_MESSAGE_MODAL } from '../../constants/ModalNames'
import { Switch, Route } from 'react-router-dom'


const Dashboard = props => {
    const [isVisible, setIsVisible] = useState(false)
    const { store, dispatch } = UseReduxHook()
    const { UiModalReducer } = store

    useEffect(() => {
        setIsVisible(UiModalReducer?.isVisible)
    }, [store])


    //this calls modal to be shown
    useState(() => {
        setTimeout(() => {
            dispatch(ActionWithPayload(SHOW_MODAL, { screenName: WELCOME_MESSAGE_MODAL }))
        }, 2000)
        setTimeout(() => {
            dispatch(ActionWithoutPayload(DESTROY_MODAL))
        }, 6000)
    }, [])





    return (
        <div className={"dashboard-container"}>
            {isVisible && <AppModal />}

            <Sidebar />
            <div className={"dashboard-content"}>
                <Switch>
                    <Route path="/" exact component={DashboardMainScreen} />
                    <Route path="/contacts" component={MyContacts} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/groups" component={MyGroups} />
                </Switch>

            </div>
        </div>
    )
}


export default Dashboard