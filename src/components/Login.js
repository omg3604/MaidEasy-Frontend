import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = (props) => {

    return (
        <div className='container me-3 ms-5 my-5 p-5 maindiv'>
            <div class="d-flex justify-content-around flex-wrap maindiv">
                <div class="card d-flex justify-content-center align-items-center pt-3" style={{ width: "18rem" , boxShadow : "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                    <div><img class="card-img-top" src={require('../images/Admin.png')} style={{ width: "10.5rem", height: "10rem" , borderRadius:"20px"}} alt="Card image cap" /></div>
                    <div class="card-body d-flex align-items-center flex-column">
                        <h5 class="card-title my-2">Login as <strong>Admin</strong></h5>
                        <Link to='/AdminLogin' class="btn btn-primary btncss">Login</Link>                        </div>
                </div>
                <div class="card d-flex justify-content-center align-items-center pt-3" style={{ width: "18rem" , boxShadow : "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                    <img class="card-img-top" src={require('../images/User.png')} style={{ width: "10.5rem", height: "10rem" , borderRadius:"20px" }} alt="Card image cap" />
                    <div class="card-body d-flex align-items-center flex-column">
                        <h5 class="card-title my-2">Login as <strong>User</strong></h5>
                        <Link to='/UserLogin' class="btn btn-primary btncss">Login</Link>
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

export default Login;