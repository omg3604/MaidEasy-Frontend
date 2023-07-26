import React from 'react'
import './WithoutLogin.css'
import { useContext, useEffect, useRef, useState } from 'react';
import workercontext from '../context/worker/workerContext';
import Spinner from './Spinner'
import EmployeeCard from './EmployeeCard';

function Employees() {

    const wcontext = useContext(workercontext);
    const { getVerifiedWorkers, verifiedWorkers, workerLoad } = wcontext;

    useEffect(() => {
        getVerifiedWorkers();
    }, [])

    return (
        <div><div className='container'>
            <h3> Employees List : </h3>
            <hr></hr>
            {workerLoad && <Spinner />}
            {verifiedWorkers.length==0 && <h5>No Employee Details found!</h5>}
            {verifiedWorkers.map((worker) => {
                return <EmployeeCard key={worker._id} worker={worker} ></EmployeeCard>;
            }
            )}
        </div></div>
    )
}

export default Employees
