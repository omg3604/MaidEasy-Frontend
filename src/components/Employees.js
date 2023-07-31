import React from 'react'
import './WithoutLogin.css'
import { useContext, useEffect, useRef, useState } from 'react';
import workercontext from '../context/worker/workerContext';
import Spinner from './Spinner'
import EmployeeCard from './EmployeeCard';
import { Link } from 'react-router-dom';

function Employees() {

    const wcontext = useContext(workercontext);
    const { getVerifiedWorkers, verifiedWorkers, workerLoad } = wcontext;

    useEffect(() => {
        getVerifiedWorkers();
    }, [])

    if(workerLoad){
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className='container'>
            <div className='d-flex justify-content-left'>
                <Link className='btn bg-light' to='/'><i class="fa-solid fa-arrow-left fa-lg"></i></Link>
                <h3 className='mx-5'> Employee Lists : </h3>
            </div>
                <hr></hr>
                <div className='d-flex flex-wrap mb-5 justify-content-left'>
                    {verifiedWorkers.length==0 && <h5>No Employee Details found!</h5>}
                    {verifiedWorkers.map((worker) => {
                        return <EmployeeCard key={worker._id} worker={worker} ></EmployeeCard>;
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Employees
