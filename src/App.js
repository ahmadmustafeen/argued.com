import logo from './logo.svg';
import './App.css';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import RequestReset from './containers/RequestReset'
import OTPScreen from './containers/OTPScreen'
import ResetPassword from './containers/ResetPassword'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './containers/Dashboard';

function App() {
  return (
    <Dashboard />
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
