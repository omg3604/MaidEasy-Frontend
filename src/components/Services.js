import React from 'react'
import './WithoutLogin.css'
import { useContext, useEffect, useRef, useState } from 'react';
import workercontext from '../context/worker/workerContext';
import WorkerCard from './WorkerCard';
import Spinner from './Spinner'

function Services() {

    const wcontext = useContext(workercontext);
    const { getVerifiedWorkers, verifiedWorkers, workerLoad } = wcontext;

    useEffect(() => {
        getVerifiedWorkers();
    }, [])

    return (
        <div><div className='container'>
            <h3> Workers List : </h3>
            <hr></hr>
            {workerLoad && <Spinner />}
            {verifiedWorkers.length==0 && <h5>No Workers details found!</h5>}
            {verifiedWorkers.map((vworker) => {
                return <WorkerCard key={vworker._id} vworker={vworker} ></WorkerCard>;
            }
            )}
        </div></div>
    )
}

export default Services
