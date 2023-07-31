import React from 'react'
import './WithoutLogin.css'
import { useContext, useEffect, useRef, useState } from 'react';
import workercontext from '../context/worker/workerContext';
import RequestCard from './RequestCard';
import Spinner from './Spinner'
import { Link } from 'react-router-dom';

function VerifyRequests() {

    const wcontext = useContext(workercontext);
    const { getUnverifiedWorkers, workers, workerLoad } = wcontext;

    useEffect(() => {
        getUnverifiedWorkers();
    }, [])

    if (workerLoad) {
        return <Spinner></Spinner>
    }

    return (
        <div><div className='container'>
            <div className='d-flex justify-content-left'>
                <Link className='btn bg-light' to='/'><i class="fa-solid fa-arrow-left fa-lg"></i></Link>
                <h3 className='mx-5'> Worker Request Lists : </h3>
            </div>
            <hr></hr>
            <div className='d-flex  flex-wrap mb-5 justify-content-left'>
                {workers.length == 0 && <h5>No Worker Requests found!</h5>}
                {workers.map((worker) => {
                    return <RequestCard key={worker._id} worker={worker} ></RequestCard>;
                }
                )}
            </div>
        </div></div>
    )
}

export default VerifyRequests
