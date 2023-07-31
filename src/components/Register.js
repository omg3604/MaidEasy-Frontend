import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = (props) => {

    // const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

    // const context = useContext(UserContext);
    // const { userLoad, setuserLoad } = context;

    // let navigate = useNavigate();

    // const onchange = (e) => {
    //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // }

    // const signupSubmit = async (e) => {
    //     e.preventDefault();
    //     setuserLoad(true);
    //     // API Call
    //     const { name, email, password } = credentials;
    //     const response = await fetch(`https://odd-mite-shoe.cyclic.app/api/auth/createuser`, {
    //         method: "POST", // *GET, POST, PUT, DELETE, etc.
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ name, email, password }), // body data type must match "Content-Type" header
    //     });

    //     const json = await response.json();
    //     if (json.status === "PENDING") {
    //         const userId = json.data.userId;
    //         localStorage.setItem('userid', userId);
    //         localStorage.setItem('usermail', email);
    //         console.log(json);
    //         console.log(userId);
    //         navigate("/VerifyAccount");
    //         props.showAlert("success", "An otp has been sent to the given email.");
    //     }
    //     else {
    //         //console.log(json);
    //         props.showAlert("warning", json.message);
    //     }
    //     setCredentials({ name: "", email: "", password: "", cpassword: "" });
    //     setuserLoad(false);
    // }

    // if (userLoad) {
    //     return <Spinner />;
    // }

    return (
        <div className='container me-3 ms-5 my-5 p-5 maindiv'>
            <div class="d-flex justify-content-around flex-wrap maindiv">
                <div class="card d-flex justify-content-center align-items-center pt-3" style={{ width: "18rem" , boxShadow : "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                    <div><img class="card-img-top" src={require('../images/User.png')} style={{ width: "10.5rem", height: "10rem" , borderRadius:"20px"}} alt="Card image cap" /></div>
                    <div class="card-body d-flex align-items-center flex-column">
                        <h5 class="card-title my-2">Register as <strong>User</strong></h5>
                        <Link to='/UserRegister' class="btn btn-primary btncss">Register</Link>                        </div>
                </div>
                <div class="card d-flex justify-content-center align-items-center pt-3" style={{ width: "18rem" , boxShadow : "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                    <img class="card-img-top" src={require('../images/WorkerRegister.png')} style={{ width: "10.5rem", height: "10rem" , borderRadius:"20px" }} alt="Card image cap" />
                    <div class="card-body d-flex align-items-center flex-column">
                        <h5 class="card-title my-2">Register as <strong>Help</strong></h5>
                        <Link to='/WorkerRegister' class="btn btn-primary btncss">Register</Link>
                    </div>
                </div>
                {/* <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Worker Login</a>
                        </div>
                </div> */}
            </div>
        </div>
    )
}

export default Register