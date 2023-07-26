import React from 'react'
import './WithoutLogin.css'
import { useContext, useEffect, useRef, useState } from 'react';
import workercontext from '../context/worker/workerContext';
import RequestCard from './RequestCard';
import Spinner from './Spinner'

function VerifyRequests() {

    const wcontext = useContext(workercontext);
    const { getUnverifiedWorkers, workers, workerLoad } = wcontext;

    useEffect(() => {
        getUnverifiedWorkers();
    }, [])

    return (
        <div><div className='container'>
            <h3> Worker Request Lists : </h3>
            <hr></hr>
            {workerLoad && <Spinner />}
            {workers.length==0 && <h5>No Worker Requests found!</h5>}
            {workers.map((worker) => {
                return <RequestCard key={worker._id} worker={worker} ></RequestCard>;
            }
            )}
        </div></div>
    )
}

export default VerifyRequests
