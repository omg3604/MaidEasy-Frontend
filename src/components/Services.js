import React from 'react'
import './Services.css'
import { useContext, useEffect, useRef, useState } from 'react';
import workercontext from '../context/worker/workerContext';
import WorkerCard from './WorkerCard';
import Spinner from './Spinner'
import { Link } from 'react-router-dom';

function Services() {

    const wcontext = useContext(workercontext);
    const { getVerifiedWorkers, verifiedWorkers, workerLoad } = wcontext;

    useEffect(() => {
        getVerifiedWorkers();
    }, [])

    return (
        <div>
            <div className='container mb-5'>
                <p  className='text-dark display-6 text-center mt-3 mb-5'>Want your Chores simplified? <br></br>Book Now, Relax Later!</p>
                <div className='d-flex justify-content-start jobdisplay'>
                    <div className="card d-flex flex-row JobCard" style={{ width: "30rem" }}>
                        <img src={require('../images/HouseHelp.png')} style={{ width: "15rem", height: "10rem" }}></img>
                        <div className="card-body">
                            <h5 className="card-title">HouseHelps</h5>
                            <p className="card-text descp">Experienced, punctual & verified housekeepers for everyday home cleaning!</p>
                            <Link to="/Services/HouseHelps" className="btn btncss"> Book Now <i className="fa-solid fa-angles-right" style={{ color: "white" }}></i></Link>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end jobdisplay'>
                    <div className="card d-flex flex-row JobCard" style={{ width: "30rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Cooks</h5>
                            <p className="card-text descp">Experienced and Hygenic Cooks, "Sizzling with passion, precision, and flavor in every task they undertake!"</p>
                            <Link to="/Services/Cooks" className="btn btncss"> Book Now <i className="fa-solid fa-angles-right" style={{ color: "white" }}></i></Link>
                        </div>
                        <img src={require('../images/Cooks.png')} style={{ width: "15rem", height: "12rem" }}></img>
                    </div>
                </div>
                <div className='d-flex justify-content-start jobdisplay'>
                    <div className="card d-flex flex-row JobCard" style={{ width: "30rem" }}>
                        <img src={require('../images/Babysitters.png')} style={{ width: "15rem", height: "10rem" }}></img>
                        <div className="card-body">
                            <h5 className="card-title">Babysitters</h5>
                            <p className="card-text descp">"Compassionate caregivers dedicated to nurturing smiles and creating cherished childhood memories."</p>
                            <Link to="/Services/BabySitters" className="btn btncss"> Book Now <i className="fa-solid fa-angles-right" style={{ color: "white" }}></i></Link>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end jobdisplay'>
                    <div className="card d-flex flex-row JobCard" style={{ width: "30rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Office Boys</h5>
                            <p className="card-text descp">"Efficient and reliable office support, ensuring seamless operations and a well-organized work"</p>
                            <Link to="/Services/OfficeBoys" className="btn btncss"> Book Now <i className="fa-solid fa-angles-right" style={{ color: "white" }}></i></Link>
                        </div>
                        <img src={require('../images/OfficeBoys.png')} style={{ width: "15rem", height: "12rem" }}></img>
                    </div>
                </div>
                <div className='d-flex justify-content-start'>
                    <div className="card d-flex flex-row JobCard" style={{ width: "30rem" }}>
                        <img src={require('../images/Drivers.png')} style={{ width: "15rem", height: "10rem" }}></img>
                        <div className="card-body">
                            <h5 className="card-title">Drivers</h5>
                            <p className="card-text descp">"Steering success with skill and dedication: Keep the wheels turning and deliver excellence on every journey."</p>
                            <Link to="/Services/Drivers" className="btn btncss"> Book Now <i className="fa-solid fa-angles-right" style={{ color: "white" }}></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
