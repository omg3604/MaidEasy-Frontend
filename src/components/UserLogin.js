import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import './Login.css';
import Spinner from './Spinner.js';
import { Link } from 'react-router-dom';

const UserLogin = (props) => {

    const host = "https://funny-newt-buckle.cyclic.app";

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    // For updating the details of user on account section and navbar upon new login.
    const context = useContext(UserContext);
    const { details, getUserDetails , userLoad , setuserLoad} = context;

    let navigate = useNavigate();
    
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setuserLoad(true);

        // API Call
        const response = await fetch(`${host}/api/user/login`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials), // body data type must match "Content-Type" header
        });

        const json = await response.json();
        // console.log(json);
        if (json.status === "PENDING") {
            const userId = json.data.userId;
            localStorage.setItem('userid' , userId);
            localStorage.setItem('usermail' , credentials.email);
            // console.log(json);
            // console.log(userId);
            navigate("/VerifyAccount");
            props.showAlert("success", "An otp has been sent to the given email.");
        }
        else if(json.status == "SUCCESS"){
            // console.log(json.authToken);
            localStorage.setItem('token', json.authToken);
            // console.log("the auth token is : ", localStorage.getItem('token'));
            navigate("/");
            props.showAlert("success", "Logged In successfully");
            getUserDetails(localStorage.getItem('token')); // for updating user name on the namvbar and account section
        }
        else {
            //console.log(json);
            props.showAlert("warning", json.message);
        }
        setuserLoad(false);
        setCredentials({ email: "", password: "" });
        // setEmail("");
        // setPassword("");
    }

    if (userLoad){
        return <Spinner/>;
    }

    return (
        <div className='container mb-5'>
            <section className="intro">
                <div className="bg-image h-100">
                    <div className="mask d-flex align-items-center h-100">
                        <div className="container">
                            <Link className='btn bg-light rounded-circle py-2' to='/Login'><i className="fa-solid fa-arrow-left fa-lg"></i></Link>
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-12 col-lg-10 col-xl-8">
                                    <div className="card" style={{borderRadius: "1rem"}}>
                                        <div className="row g-0">
                                            <div className="col-md-4 d-none d-md-block">
                                                <img
                                                    src={require('../images/UserLogin.png')}
                                                    alt="login form"
                                                    className="img-fluid" style={{borderTopLeftRadius: "1rem" , borderBottomLeftRadius: "1rem"}}
                                                />
                                            </div>
                                            <div className="col-md-8 d-flex align-items-center bg-light">
                                                <div className="card-body py-5 px-4 p-md-4">

                                                    <form onSubmit={handleSubmit}>
                                                        <h4 className="fw-bold mb-4" style={{color: "#19376D"}}>Log in to your account</h4>
                                                        <p className="mb-4" style={{color: "#45526e"}}>To log in, please fill in these text fiels with your e-mail address and password.</p>

                                                        <div className="form-outline mb-4">
                                                            <input type="email" className="form-control mb-1" id="email" name="email" aria-describedby="emailHelp" placeholder='Enter Email' value={credentials.email} onChange={onchange} required />
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <label className="form-label" htmlFor="email">Email address</label>
                                                        </div>

                                                        <div className="form-outline mb-3">
                                                            <input type="password" className="form-control mb-1" id="password" name='password' placeholder='Enter Password' value={credentials.password} onChange={onchange} required />
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                            <label className="form-label" htmlFor="password">Password</label>
                                                        </div>

                                                        <div className="d-flex justify-content-end">
                                                            <button className="btn btn-primary btn-rounded btncss" type="submit">Log in</button>
                                                        </div>
                                                        <hr/>
                                                            <Link className="link float-start linkstyle" to="/UserRegister">New User? Create Account!</Link>
                                                            <Link className="link float-end linkstyle" to="/ForgetPassword">Forgot password?</Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='my-4 text-light'><hr></hr></div>
        </div>
    )
}

export default UserLogin;