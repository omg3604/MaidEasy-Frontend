import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import Spinner from './Spinner.js';
import './NavBar.css';

const NavBar = (props) => {
    const context = useContext(UserContext);
    const { details, getUserDetails, userLoad, setuserLoad } = context;

    useEffect(() => {
        if (localStorage.getItem('token') && !localStorage.getItem('admin')) getUserDetails(localStorage.getItem('token'));
    }, [])


    let location = useLocation();
    let navigate = useNavigate();

    const handleLogout = () => {
        setuserLoad(true);
        localStorage.removeItem('token');
        if (localStorage.getItem('admin')) localStorage.removeItem('admin');
        navigate('/Login');
        props.showAlert('success', 'Logged Out successfully!');
        setTimeout(() => {
            setuserLoad(false);
        }, 1000);
    }


    return (
        <div className='p-1 mb-6' style={{ position: "fixed", backgroundColor: "white", zIndex: "100", width: "100%" , boxShadow:"0px 5px 10px 0px rgba(0, 0, 0, 0.25)" }}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid mx-3">
                    <Link className="navbar-brand" style={{ color: "#0B2447", fontWeight: "bold" }} to="/">MaidEasy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-2">
                                    <Link className={`nav-link linkcss`} aria-current="page" to="/"> <i className="fa fa-home" aria-hidden="true"> </i> Home </Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""} linkcss`} to="/about"> <i className="fa-solid fa-circle-info"></i> About</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className={`nav-link ${location.pathname === "/Services" ? "active" : ""} linkcss`} to="/Services"> <i className="fa-solid fa-handshake-angle"></i> Services</Link>
                                </li>
                                {localStorage.getItem('token') && localStorage.getItem('admin') && <li className="nav-item mx-2">
                                    <Link className={`nav-link ${location.pathname === "/VerifyRequests" ? "active" : ""} linkcss`} to="/VerifyRequests"> <i className="fa-solid fa-handshake-angle"></i> Requests</Link>
                                </li>}
                                {localStorage.getItem('token') && localStorage.getItem('admin') && <li className="nav-item mx-2">
                                    <Link className={`nav-link ${location.pathname === "/Employees" ? "active" : ""} linkcss`} to="/Employees"> <i className="fa-solid fa-user"></i> Employees</Link>
                                </li>}
                                {localStorage.getItem('token') && !localStorage.getItem('admin') && <li className="nav-item mx-2">
                                    <Link className={`nav-link ${location.pathname === "/MyBookings" ? "active" : ""} linkcss`} to="/MyBookings"> <i className="fa-solid fa-circle-check"></i> My Bookings</Link>
                                </li>}
                                <li className="nav-item mx-2">
                                    <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""} linkcss`} to="/contact"> <i className="fa-solid fa-phone-volume"></i> Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='d-flex justify-content-end'>
                            {!localStorage.getItem('token') ?
                                <form className="d-flex ">
                                    <Link className='btn btn-primary mx-2 btn-rounded navbtn' style={{ backgroundColor: "#19376D", borderColor: "#19376D" }} to="/Login" role='button'> Login </Link>
                                    <Link className='btn btn-primary mx-2 btn-rounded navbtn' style={{ backgroundColor: "#19376D", borderColor: "#19376D" }} to="/Register" role='button'> Register </Link>
                                </form>
                                : <form className="d-flex mx-3">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light dropdown-toggle d-flex align-items-center accountbtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <p className='mx-2 mb-0'>{localStorage.getItem('admin') ? 'Admin' : details.name}</p>
                                            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" className="rounded-circle" style={{ width: "25px" }} alt="Avatar"></img>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            {!localStorage.getItem('admin') && <Link className="dropdown-item" aria-current="page" to="/Account">My Account</Link>}
                                            <Link className="dropdown-item" to="/MyBookings">My Bookings</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className='btn btn-primary mx-2 btn-rounded navbtn' style={{ backgroundColor: "#19376D", borderColor: "#19376D" }} to="/Login" role='button' onClick={handleLogout}> Log out </Link>
                                        </div>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;