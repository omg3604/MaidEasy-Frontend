import React from 'react';
import { useContext , useState} from 'react';
import './WorkerCard.css'
import { Navigate, useNavigate } from 'react-router-dom';
import Booking from './Booking';
import workerContext from '../context/worker/workerContext';

export default function WorkerCard(props) {

    const { vworker } = props;
    const navigate = useNavigate();
    const wcontext = useContext(workerContext);
    const {checkAvailability ,getWorkerDetails} = wcontext;

    const onBookClick = () => {
        if(!localStorage.getItem('token')){
            navigate('/Login');
        }
        else{
            getWorkerDetails(vworker._id);
            checkAvailability(vworker._id , vworker.occupation);
            navigate('/Booking');
        }
    }

    return (
        <div className='m-2'>
            <div className="card JobCard" style={{ borderRadius: "15px" , width:"280px" }}>
                    <div className="card-body text-center">
                        <div className="mt-3 mb-3">
                            {vworker.gender=='Female' && <img src={require('../images/femaleworker.jpg')}
                                className="rounded-circle img-fluid" style={{ width: "120px" }} />}
                            {vworker.gender=='Male' && <img src={require('../images/maleworker.jpg')}
                                className="rounded-circle img-fluid" style={{ width: "120px" }} />}

                        </div>
                        <h4 className="mb-2">{vworker.name}</h4>
                        <h5 className="mb-2 text-info">{vworker.occupation}</h5>
                        <p className="text-muted mb-4">{vworker.gender}<span className="mx-2">|</span> 
                        {vworker.age} years old </p>
                        <button type="button" className="btn btn-primary btn-rounded btn-lg btncss" onClick={onBookClick}>
                            Book now
                        </button>
                        <div className="d-flex justify-content-around text-center mt-5 mb-2">
                            <div>
                                <p className="mb-2 h5">2+ years</p>
                                <p className="text-muted mb-0">Experience</p>
                            </div>
                            <div>
                                <p className="mb-2 h5">4.5 <i className="fa-solid fa-star" style={{color: "#ffd700"}}></i> </p>
                                <p className="text-muted mb-0">Respect</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}