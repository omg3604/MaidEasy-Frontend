import WorkerContext from "./workerContext";
import React from "react";
import { useState } from "react";

const WorkerState = (props) => {
    const host = "https://funny-newt-buckle.cyclic.app";
    const workersinitial = [];

    const [workers, setWorkers] = useState(workersinitial);
    const [verifiedWorkers , setVerifiedWorkers] = useState(workersinitial);
    const [workerLoad , setworkerLoad] = useState(false);
    const [BookWorker , setBookWorker] = useState({id:"" ,name:"" ,contact:"" ,age:0 , gender:"", city:"", state:"", occupation:"", expectedSalary:"" });
    const [isAvail , setisAvail] = useState(false);

    // Get all verfied Workers
    const getVerifiedWorkers = async () => {
        // API Call
        setworkerLoad(true);
        const response = await fetch(`${host}/api/worker/getVerifiedWorkers`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();
        // console.log(json.workersList);
        setVerifiedWorkers(json.workersList);
        setworkerLoad(false);
    }

    // Get all unverified Workers (for admin)
    const getUnverifiedWorkers = async () => {
        // API Call
        setworkerLoad(true);
        const response = await fetch(`${host}/api/worker/getUnverifiedWorkers`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        // console.log(json.workersList);
        setWorkers(json.workersList);
        setworkerLoad(false);
    }

    const verifyWorker = async (workerID) => {
        setworkerLoad(true);
        const response = await fetch(`${host}/api/worker/verifyWorker` ,{
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
                "auth-token" : localStorage.getItem('token')
            },
            body : JSON.stringify({workerID }),
        })

        const json = await response.json();
        
        getUnverifiedWorkers();
        getVerifiedWorkers();
        setworkerLoad(false);
    }

    const deleteWorker = async(workerID) => {
        setworkerLoad(true);
        const response = await fetch(`${host}/api/worker/deleteWorker` , {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json",
                "auth-token" : localStorage.getItem('token')
            },
            body : JSON.stringify({workerID}),
        })
        const json = await response.json();

        getUnverifiedWorkers();
        getVerifiedWorkers();
        setworkerLoad(false);
    }

    const getWorkerDetails = async (workerid) => {
        setworkerLoad(true);
        const response = await fetch(`${host}/api/worker/GetWorkerDetails/${workerid}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            }
        });
         
        const json = await response.json();
        setBookWorker({
            id: json.details._id,
            name:json.details.name ,
            contact: json.details.contact,
            age: json.details.age, 
            gender: json.details.gender, 
            city: json.details.city, 
            state: json.details.state, 
            occupation: json.details.occupation, 
            expectedSalary: json.details.expectedSalary 

        });
        setworkerLoad(false);
    }

    const checkAvailability = async(workerID , occupation) => {
        setworkerLoad(true);
        const response = await fetch(`${host}/api/worker/CheckAvailability` , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "auth-token" : localStorage.getItem('token')
            },
            body : JSON.stringify({workerID , occupation}),
        })
        const json = await response.json();
        if(json.status == "Available"){
            setisAvail(true);
        }
        else{
            setisAvail(false);
        }
        setworkerLoad(false);
    }
    
    return (
        <WorkerContext.Provider value={{ workers , verifiedWorkers , getVerifiedWorkers, getUnverifiedWorkers,  workerLoad , setworkerLoad , verifyWorker , deleteWorker , getWorkerDetails, BookWorker , checkAvailability , isAvail}}> 
            {props.children}
        </WorkerContext.Provider>
    )
}

export default WorkerState;