import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = (props) => {

    return (
        <div className='container my-4 pb-5'>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Login</h5>
                            <p class="card-text">as Admin</p>
                            <Link to='/AdminLogin' class="btn btn-primary">Admin Login</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Login</h5>
                            <p class="card-text">as User</p>
                            <a href="#" class="btn btn-primary">User Login</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Login</h5>
                            <p class="card-text">as Worker</p>
                            <a href="#" class="btn btn-primary">Worker Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;