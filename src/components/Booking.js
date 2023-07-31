import React, { useEffect, useContext, useState } from 'react'
import workerContext from '../context/worker/workerContext';
import './Booking.css';
import HouseHelpForm from '../components/HouseHelpForm';
import BabysitterForm from '../components/BabysitterForm';
import CookForm from '../components/CookForm';
import DriverForm from '../components/DriverForm';
import OfficeBoyForm from '../components/OfficeBoyForm';
import Spinner from '../components/Spinner';
import UnAvailability from './UnAvailability';

import { Link } from 'react-router-dom';

function Booking(props) {

    const { BookWorker , workerLoad , isAvail , getWorkerDetails , checkAvailability} = useContext(workerContext);

    const [isBook , setisBook] = useState(false);

    const onBookClick = () => {
        setisBook(true);
    }

    // useEffect(() => {
    //     getWorkerDetails(BookWorker._id);
    //     checkAvailability(BookWorker._id , BookWorker.occupation);
    // }, [])
    


    if(workerLoad){
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className="container mb-5 mt-0">
                <div className="main-body mb-5">
                    <div className='d-flex justify-content-left align-items-center mb-4'>
                        <Link className='btn bg-light rounded-circle py-2' to={BookWorker.occupation==="Office Boy"? '/Services/OfficeBoys' : `/Services/${BookWorker.occupation}s`}><i class="fa-solid fa-arrow-left fa-lg"></i></Link>
                        <h3 className='mx-5'>Book a {BookWorker.occupation}</h3>
                    </div>
                    <div className="row gutters-sm d-flex align-items-center">
                        <div className="col-md-4 mb-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        {BookWorker.gender == 'Female' && <img src={require('../images/femaleworker.jpg')}
                                            className="rounded-circle img-fluid mt-2" style={{ width: "120px" }} />}
                                        {BookWorker.gender == 'Male' && <img src={require('../images/maleworker.jpg')}
                                            className="rounded-circle img-fluid mt-2" style={{ width: "120px" }} />}
                                        <div className="mt-3">
                                            <h4>{BookWorker.name}</h4>
                                            <p className="text-secondary mb-1 h4 text-info">{BookWorker.occupation}</p>
                                            <p className="text-secondary mb-1">{BookWorker.gender} | {BookWorker.age}</p>
                                            <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                                <div className='mx-3'>
                                                    <p className="mb-2 h5">2+ years</p>
                                                    <p className="text-muted mb-0">Experience</p>
                                                </div>
                                                <div className='mx-3'>
                                                    <p className="mb-2 h5">4.5 <i className="fa-solid fa-star" style={{ color: "#ffd700" }}></i> </p>
                                                    <p className="text-muted mb-0">Respect</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {BookWorker.name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Age</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {BookWorker.age} years old
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Contact</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {BookWorker.contact}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">City</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {BookWorker.city}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">State</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {BookWorker.state}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Availability</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {isAvail && <span className="badge badge-success bg-success text-lg">Available</span>}
                                            {!isAvail && <span className="badge badge-warning bg-danger text-lg">Unavailable</span>}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row text-center">
                                        <div className="col-sm-12">
                                            <button className={`btn btn-info btncss ${isAvail==false? 'disabled' : ''}`} onClick={onBookClick}>Book Now</button>
                                        </div>
                                        {isBook && <p className='text-muted'>Fill the below form to complete your Booking.</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {!isAvail && isBook && <UnAvailability></UnAvailability>}

                    {isAvail && isBook && <div>
                        {BookWorker.occupation==="HouseHelp" && <HouseHelpForm Workerdetails={BookWorker} showAlert={props.showAlert}></HouseHelpForm>}
                        {BookWorker.occupation==="Babysitter" && <BabysitterForm Workerdetails={BookWorker} showAlert={props.showAlert}></BabysitterForm>}
                        {BookWorker.occupation==="Cook" && <CookForm Workerdetails={BookWorker} showAlert={props.showAlert}></CookForm>}
                        {BookWorker.occupation==="Office Boy" && <OfficeBoyForm Workerdetails={BookWorker} showAlert={props.showAlert}></OfficeBoyForm>}
                        {BookWorker.occupation==="Driver" && <DriverForm Workerdetails={BookWorker} showAlert={props.showAlert}></DriverForm>}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Booking;