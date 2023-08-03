import React from 'react';
import { useContext } from 'react';
import workerContext from '../context/worker/workerContext';
import './RequestCard.css'

export default function EmployeeCard(props) {

    const wcontext =useContext(workerContext);
    const {deleteWorker} = wcontext;

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
                    <p className="card-text">Expec. Monthly Salary : {worker.expectedSalary}</p>
                </div>

                {/* <div className="card-body" style={{ backgroundColor: "white" }}>
                    <p className="card-text">Experience : {worker.experience} years</p>
                </div>

                <div className="card-body" style={{ backgroundColor: "white" }}>
                    <p className="card-text">Respect : {worker.respect}</p>
                </div> */}

                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary btn-rounded btncss" onClick={ondeleteClick}>Delete</button>
                </div>

                {/* <div className="card-footer text-muted">
                    <strong>Creation </strong>: {addday} - {addmonth} - {addyear}
                </div>
                <div className="card-footer text-muted">
                    <strong>Deadline </strong>: {expday} - {expmonth} - {expyear}
                </div> */}
                {/* <div className="card-footer text-muted">
                    {days_difference >= 0 && days_difference <= 7 &&
                        <div className="timer mb-2" style={{ color: "#19376D" }}><strong> {days_difference} days left </strong>
                            <i className="fa-sharp fa-solid fa-clock fa-xl" style={{ color: "#19376D" }}> </i>
                        </div>
                    }
                    { days_difference<0 &&  
                        <div className="timer mb-2" style={{ color: "#c03535" }}>
                            <i className="fa-sharp fa-solid fa-circle-xmark fa-xl" style={{ color: "#c03535" }}> </i><strong>
                                &nbsp; Expired </strong>
                        </div>
                    }
                </div> */}
            </div>
        </div>
    )
}