import React from 'react'
import './WithoutLogin.css'
import { useContext, useEffect, useRef, useState } from 'react';
import workercontext from '../context/worker/workerContext';
import WorkerCard from './WorkerCard';
import Spinner from './Spinner'
import { Link } from 'react-router-dom';


const WithoutLogin = () => {

  return (
    <div>
      <div className='firstSec py-5'>
        <div className="jumbotron jumbotron-fluid mb-4 p-5">
          <div className="container d-flex flex-column justify-content-center align-items-center ">
            <h1 className="display-4 my-3 text-center">Welcome to MaidEasy</h1>
            <h3 className="display-7 text-center" >Modern India'a Domestic Help Hiring Platform</h3>
            <p className="lead my-3 text-center">In search of a "DIDI", Dont't worry! We are with you.</p>
            <Link to='/Services' className="container d-flex justify-content-center my-4"><button className="btn btn-primary btn-lg btncss" >Get workers list</button></Link>
            {/* <div className="container d-flex justify-content-center my-4"><button onClick={ongetclick} className="btn btn-primary btn-lg btncss" >Add a worker</button></div> */}
          </div>
          <div className='container d-flex'>
            <Link to='/HouseHelps' className="container d-flex justify-content-center my-4"><button className="btn btn-primary btn-lg btncss" >House Helps</button></Link>
            <Link to='/Cooks' className="container d-flex justify-content-center my-4"><button className="btn btn-primary btn-lg btncss" >Cooks</button></Link>
            <Link to='/CareTakers' className="container d-flex justify-content-center my-4"><button className="btn btn-primary btn-lg btncss" >Care Takers</button></Link>
            <Link to='/BabySitters' className="container d-flex justify-content-center my-4"><button className="btn btn-primary btn-lg btncss" >Babysitters</button></Link>
            <Link to='/Drivers' className="container d-flex justify-content-center my-4"><button className="btn btn-primary btn-lg btncss" >Drivers</button></Link>
          </div>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide features" data-bs-ride="true">
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
      </div>

      {/* <section className="mb-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 rotate">
              <div className="feature-box">
                <i className="fa-solid fa-rocket fa-3x"></i>
                <h3>Easy to Use</h3>
                <p>Our note-making platform is designed to be user-friendly and intuitive.</p>
              </div>
            </div>
            <div className="col-md-4 rotate">
              <div className="feature-box">
                <i className="fas fa-folder fa-3x"></i>
                <h3>Organize Your Notes</h3>
                <p>Create folders and tags to keep your notes organized and easy to find.</p>
              </div>
            </div>
            <div className="col-md-4 rotate">
              <div className="feature-box">
                <i className="fas fa-globe fa-3x"></i>
                <h3>Access Anywhere</h3>
                <p>Access your notes from anywhere with an internet connection.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className='my-5'>
        <hr></hr>
      </div>
    </div >
  )
}

export default WithoutLogin;