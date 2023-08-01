import WorkerContext from "./workerContext";
import React from "react";
import { useState } from "react";

const WorkerState = (props) => {
    const host = "https://repulsive-newt-trench-coat.cyclic.cloud";
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
    

    /*
    // Add a note
    const addNote = async (title, description, tag , expdate) => {
        //console.log("adding a new note!");
        // API Call
        setnoteLoad(true);
        const response = await fetch(`${host}/api/notes/addNotes`, {
            //mode: 'no-cors',
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({title , description , tag , expdate}), // body data type must match "Content-Type" header
        });
        //console.log(JSON.stringify({title , description , tag}));
        const newnote = await response.json();
        setNotes(notes.concat(newnote));
        setnoteLoad(false);
    }

    // Delete a note
    const deleteNote = async (id) => {
        //setnoteLoad(true);
        const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
        }); 

        const txt = await response.text(); // parses JSON response into native JavaScript object
        console.log(txt);

        //console.log("deleteing the note with id : " + id);
        let newnotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newnotes);
        //setnoteLoad(false);
    }

    // Edit a note
    const editNote = async (id, title, description, tag , expdate) => {
        // API Call
        setnoteLoad(true);
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({title , description , tag , expdate}), // body data type must match "Content-Type" header
        });
        const txt = await response.text(); // parses JSON response into native JavaScript object
        //console.log(txt);

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                notes[index].title = title;
                notes[index].description = description;
                notes[index].tag = tag;
                notes[index].expdate = expdate;
                break;
            }
        }
        //console.log(notes);
        setNotes(notes);            
        getNotes();         // for fetching all the updated notes from server to display to client.
        setnoteLoad(false);
    }

    // Get all notes by Tag
    const getNotesByTag = async (tag) => {
        // API Call
        setnoteLoad(true);
        const response = await fetch(`${host}/api/notes/fetchNotesByTag`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({tag}),
        });
        const json = await response.json();
        // console.log("getting all notes");
        console.log(json);
        setNotes(json);
        setnoteLoad(false);
    }

    // Delete all notes of a User
    const deleteAllNotes = async () => {
        const response = await fetch(`${host}/api/notes/deleteAllNotes`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        const json = await response.json();
        console.log(json);
    }

    // Save a shared note
    // const saveSharedNote = async (title, description, tag , expdate , email) => {
        
    //     return false;
    // }
    */

    return (
        <WorkerContext.Provider value={{ workers , verifiedWorkers , getVerifiedWorkers, getUnverifiedWorkers,  workerLoad , setworkerLoad , verifyWorker , deleteWorker , getWorkerDetails, BookWorker , checkAvailability , isAvail}}> 
            {props.children}
        </WorkerContext.Provider>
    )
}

export default WorkerState;