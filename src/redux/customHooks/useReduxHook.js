import React from 'react'
import {useDispatch,useSelector}from 'react-redux'


const UseReduxHook = props => {
    const dispatch = useDispatch()
    const store = useSelector(store=>store)
    return {store,dispatch}
}

export {UseReduxHook}