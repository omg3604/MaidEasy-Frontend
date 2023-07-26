import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import workerContext from '../context/worker/workerContext';
import WorkerCard from './WorkerCard'
import Spinner from './Spinner';

function BabySitter(props) {

    const Wcontext = useContext(workerContext);
    const {getVerifiedWorkers , verifiedWorkers , workerLoad} = Wcontext;

    let navigate = useNavigate();

    useEffect(() => {
        getVerifiedWorkers();
    }, [])

    return (
        <div className='container'>
            
            <div className='row my-3 py-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2 style={{ color: "#19376D" }}> Available BabySitter : </h2>
                    {/* <div className='d-flex align-items-center'>
                        <p className='mx-3 my-0'>Search By Tag : </p>
                        <select className="select me-5 rounded" style={{ backgroundColor: "#19376D", color: "white" }} onChange={ontagchange}>
                            <option value="All">All</option>
                            <option value="General">General</option>
                            <option value="Personal">Personal</option>
                            <option value="Business">Business</option>
                            <option value="shared">Shared</option>
                        </select>
                    </div> */}
                </div>
                <hr></hr>
                {workerLoad && <Spinner />}
                {!workerLoad && <h5>{verifiedWorkers.filter(w => w.occupation === "Babysitter").length === 0 && `No BabySitters found.`}</h5>}
                {!workerLoad && verifiedWorkers.filter(w => w.occupation === "Babysitter").map((worker) => {
                    return <WorkerCard key={worker._id} vworker={worker}></WorkerCard>;
                }
                )}
            </div>
        </div>
    )
}

export default BabySitter;