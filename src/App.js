import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import About from './components/About';
import VerifyAccount from './components/VerifyAccount';
import Services from './components/Services';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/worker/WorkerState';
import UserState from './context/user/UserState';
import Alert from './components/Alert';
import Footer from './components/Footer';
import ResetPassword from './components/ResetPassword';
import ForgetPassword from './components/ForgetPassword';
import AdminLogin from './components/AdminLogin';
import VerifyRequests from './components/VerifyRequests'
import Employees from './components/Employees';
import WorkerRegister from './components/WorkerRegister';
import HouseHelp from './components/HouseHelp';
import Cook from './components/Cook';
import BabySitter from './components/Babysitter';
import Driver from './components/Driver';
import OfficeBoy from './components/OfficeBoy';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';
import Booking from './components/Booking';
import MyBookings from './components/MyBookings';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setTimeout(() => {
      setAlert({
        type: type,
        msg: message
      })
      setTimeout(() => {
        setAlert(null);
      }, 4000);
    }, 1000);
  }
  return (
    <UserState>
      <NoteState>
        <Router>
          <div>
            <NavBar showAlert={showAlert}></NavBar>
            <div className='pt-5'>
              <Alert alert={alert}></Alert>
            </div>
            <div>
              <Routes>
                <Route exact path='/' element={<Home showAlert={showAlert}></Home>}></Route>
                <Route exact path='/Services' element={<Services showAlert={showAlert}></Services>}></Route>
                <Route exact path='/contact' element={<Contact></Contact>}></Route>
                <Route exact path='/about' element={<About></About>}></Route>
                <Route exact path='/Login' element={<Login showAlert={showAlert}></Login>}></Route>                
                <Route exact path='/AdminLogin' element={<AdminLogin showAlert={showAlert}></AdminLogin>}></Route>
                <Route exact path='/VerifyRequests' element={<VerifyRequests showAlert={showAlert}></VerifyRequests>}></Route>
                <Route exact path='/Employees' element={<Employees showAlert={showAlert}></Employees>}></Route>
                <Route exact path='/Register' element={<Register showAlert={showAlert}></Register>}></Route>
                <Route exact path='/WorkerRegister' element={<WorkerRegister showAlert={showAlert}></WorkerRegister>}></Route>
                <Route exact path='/UserRegister' element={<UserRegister showAlert={showAlert}></UserRegister>}></Route>
                <Route exact path='/VerifyAccount' element={<VerifyAccount showAlert={showAlert}></VerifyAccount>}></Route>
                <Route exact path='/ResetPassword' element={<ResetPassword showAlert={showAlert}></ResetPassword>}></Route>
                <Route exact path='/ForgetPassword' element={<ForgetPassword showAlert={showAlert}></ForgetPassword>}></Route>
                <Route exact path='/Account' element={<Account showAlert={showAlert}></Account>}></Route>
                <Route exact path='/UserLogin' element={<UserLogin showAlert={showAlert}></UserLogin>}></Route>
                <Route exact path='/Booking' element={<Booking showAlert={showAlert}></Booking>}></Route>
                <Route exact path='/MyBookings' element={<MyBookings showAlert={showAlert}></MyBookings>}></Route>
                
                <Route exact path='/Services/HouseHelps' element={<HouseHelp showAlert={showAlert}></HouseHelp>}></Route>
                <Route exact path='/Services/Cooks' element={<Cook showAlert={showAlert}></Cook>}></Route>
                <Route exact path='/Services/Babysitters' element={<BabySitter showAlert={showAlert}></BabySitter>}></Route>
                <Route exact path='/Services/OfficeBoys' element={<OfficeBoy showAlert={showAlert}></OfficeBoy>}></Route>
                <Route exact path='/Services/Drivers' element={<Driver showAlert={showAlert}></Driver>}></Route>
      
              </Routes>
            </div>
            <Footer></Footer>
          </div>
        </Router>
      </NoteState>
    </UserState>
  );
}

export default App;
