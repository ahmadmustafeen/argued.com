import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import RequestReset from './containers/RequestReset'
import OTPScreen from './containers/OTPScreen'
import ResetPassword from './containers/ResetPassword'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './containers/Dashboard';
import {AppModal}  from './components'

function App() {
  const [isVisible,setIsVisible] = useState(false)
  useState(()=>{
    // setTimeout(()=>{
    //   setIsVisible(true)
    // },2000)
    // setTimeout(()=>{
    //   setIsVisible(false)
    // },6000)
  },[])
  return (
    <>
    {isVisible && <AppModal />}
    <Dashboard />
    </>
    // <Switch>
    //   <Route path="/signin" exact component={Signin} />
    //   <Route path="/signup" exact  component={Signup} />
    //   <Route path="/requestreset" exact component={RequestReset} />
    //   <Route path="/otp" exact component={OTPScreen} />
    //   <Route path="/reset"exact component={ResetPassword} />
    // </Switch>
    // <Signin />
    // <Signup />
    // <RequestReset />
    // <OTPScreen />
    // <ResetPassword />
  );
}

export default App;
