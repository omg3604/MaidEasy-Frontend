import React from 'react';
import { useContext } from 'react';
import workerContext from '../context/worker/workerContext';
import './RequestCard.css'

export default function RequestCard(props) {

    const wcontext =useContext(workerContext);
    const {verifyWorker , deleteWorker} = wcontext;

    const onverifyClick = () => {
        verifyWorker(worker._id);
    }

    const ondeleteClick = () => {
        deleteWorker(worker._id);
    }

    const { worker } = props;

    return (
        <div className='col-md-3 d-flex flex-row'>
            <div className=" card notecard text-center my-3">
                <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ 'backgroundColor': '#A5D7E8' }}>
                    <h5 className="card-title text-start" >Name : {worker.name}</h5>
                </div>
                <div className="card-body" style={{ backgroundColor: "white" }}>
                    <p className="card-text">Age : {worker.age}</p>
                </div>
                <div className="card-body" style={{ backgroundColor: "white" }}>
                    <p className="card-text">Gender : {worker.gender}</p>
                </div>
                <div className="card-body" style={{ backgroundColor: "white" }}>
                    <p className="card-text">City : {worker.city}</p>
                </div>
                <div className="card-body" style={{ backgroundColor: "white" }}>
                    <p className="card-text">State : {worker.state}</p>
                </div>
                <div className="card-body" style={{ backgroundColor: "white" }}>
                    <p className="card-text">Occupation : {worker.occupation}</p>
                </div>

                <div className="card-body" style={{ backgroundColor: "white" }}>
                    <p className="card-text">Contact : {worker.contact}</p>
                </div>

                <div className="card-body" style={{ backgroundColor: "white" }}>
                    <p className="card-text">Expected Monthly Salary : {worker.expectedSalary}</p>
                </div>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary btn-rounded btncss" onClick={onverifyClick}>Verify</button>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary btn-rounded btncss" onClick={ondeleteClick}>Delete</button>
                </div>
            </div>
        </div>
    )
}