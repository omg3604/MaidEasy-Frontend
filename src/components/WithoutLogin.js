import React from 'react'
import './WithoutLogin.css'
import { useContext, useEffect, useRef, useState } from 'react';
import workercontext from '../context/worker/workerContext';
import WorkerCard from './WorkerCard';
import Spinner from './Spinner'
import userContext from '../context/user/userContext';
import { Link } from 'react-router-dom';


const WithoutLogin = () => {

  return (
    <div>
      <div className='firstSec pt-3'>
        <div className="jumbotron jumbotron-fluid mb-4 p-5">
          <div className="container d-flex flex-column">
            <h1 className="display-4 my-3 text-left">Welcome to MaidEasy</h1>
            <h3 className="display-7 text-left" >Modern India'a Domestic Help Hiring Platform</h3>
            <p className="lead my-3 text-left">"Unlock the comfort of a pristine home: <br></br>Find trusted domestic help with our premier hiring platform."</p>
            <Link to='/Services' className="container d-flex justify-content-left my-4 text-decoration-none"><button className="btn btn-primary btn-lg btncss" >Book Now</button></Link>
          </div>
        </div>
      </div>

      <div className='my-5' style={{backgroundColor : "#19376D"}}>
        <div className='p-5 text-center'>
          <h3 className='text-light'>Our Featured Services</h3>
          <hr className='container' style={{color : "white"}}></hr>
          <p  className='text-light display-6'>Hire professionals, <br></br>Experienced specifically for your needs</p>
        </div>
      </div>


      <div className='container'>
        <div className='d-flex justify-content-start jobdisplay'>
          <div className="card d-flex flex-row JobCard" style={{ width: "30rem" }}>
            <img src={require('../images/HouseHelp.png')} style={{ width: "15rem", height: "10rem" }}></img>
            <div className="card-body">
              <h5 className="card-title">HouseHelps</h5>
              <p className="card-text descp">Experienced, punctual & verified housekeepers for everyday home cleaning!</p>
              <Link to="/Services/HouseHelps" className="btn btncss"> Go <i className="fa-solid fa-angles-right" style={{color : "white"}}></i></Link>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-end jobdisplay'>
          <div className="card d-flex flex-row JobCard" style={{ width: "30rem" }}>
            <div className="card-body">
              <h5 className="card-title">Cooks</h5>
              <p className="card-text descp">Great Cooks, "Sizzling with passion, precision, and flavor in every task they undertake!"</p>
              <Link to="/Services/Cooks" className="btn btncss"> Go <i className="fa-solid fa-angles-right" style={{color : "white"}}></i></Link>
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
              <Link to="/Services/Babysitters" className="btn btncss"> Go <i className="fa-solid fa-angles-right" style={{color : "white"}}></i></Link>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-end jobdisplay'>
          <div className="card d-flex flex-row JobCard" style={{ width: "30rem" }}>
            <div className="card-body">
              <h5 className="card-title">Office Boys</h5>
              <p className="card-text descp">"Efficient and reliable office support, ensuring seamless operations and a well-organized work"</p>
              <Link to="/Services/OfficeBoys" className="btn btncss"> Go <i className="fa-solid fa-angles-right" style={{color : "white"}}></i></Link>
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
              <Link to="/Services/Drivers" className="btn btncss"> Go <i className="fa-solid fa-angles-right" style={{color : "white"}}></i></Link>
            </div>
          </div>
        </div>
      </div>



      {/* <div id="carouselExampleIndicators" className="carousel slide features mt-5" data-bs-ride="true">
        <h2 className='text-light text-center mb-5'>Features</h2>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="col-md-4 rotate d-block">
              <div className="feature-box d-flex flex-column align-items-center ">
                <i className="fa-solid fa-rocket fa-3x my-2"></i>
                <h3 className='text-center'>Easy for Use</h3>
                <p className='d-none d-md-block'>Our note-making platform is designed to be user-friendly and intuitive.</p>
              </div>
            </div>          </div>
          <div className="carousel-item">
            <div className="col-md-4 rotate d-block">
              <div className="feature-box d-flex flex-column align-items-center">
                <i className="fas fa-folder fa-3x my-2"></i>
                <h3 className='text-center'>Organize Your Notes</h3>
                <p className='d-none d-md-block'>Create folders and tags to keep your notes organized and easy to find.</p>
              </div>
            </div>          </div>
          <div className="carousel-item">
            <div className="col-md-4 rotate d-block">
              <div className="feature-box d-flex flex-column align-items-center">
                <i className="fas fa-globe fa-3x my-2"></i>
                <h3 className='text-center'>Access Anywhere</h3>
                <p className='d-none d-md-block'>Access your notes from anywhere with an internet connection.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-4 rotate d-block">
              <div className="feature-box d-flex flex-column align-items-center">
                <i className="fas fa-share fa-3x my-2"></i>
                <h3 className='text-center'>Share with Anyone</h3>
                <div className='d-none d-md-block'>
                  <p>Share your notes with anywhere and from anywhere on the Application</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-4 rotate d-block">
              <div className="feature-box d-flex flex-column align-items-center">
                <i className="fa-sharp fa-solid fa-clock fa-3x my-2"></i>
                <h3 className='text-center'>Mark the Deadlines</h3>
                <div className='d-none d-md-block'>
                  <p>Save notes with deadline to remind later about the task</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <div className='my-5'>
        <hr></hr>
      </div>
    </div >
  )
}

export default WithoutLogin;