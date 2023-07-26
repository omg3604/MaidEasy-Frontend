import React from "react";
import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
    const host = "https://localhost:5000/";
    const [details, setDetails] = useState({_id:"" , name:"" , email:"" , contact:""})

    const [userLoad , setuserLoad] = useState(false);

    // Get user details
    const getUserDetails = async (token) => {
        //console.log("the token is", token);
        setuserLoad(true);
        const response = await fetch(`${host}/api/user/getuser`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            }
        });
        //console.log(response);
        const json = await response.json();
        // console.log("getting user details");
        //console.log(json);
        setDetails({
            _id : json._id,
            name : json.name,
            email : json.email,
            contact : json.contact
        })
        setuserLoad(false);
        //console.log(details);
    }

    // Edit User Details
    const editUser = async (id , name , email , contact) =>{
        // API Call
        setuserLoad(true);
        const response = await fetch(`${host}/api/user/editUser/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({name , email , contact}), // body data type must match "Content-Type" header
        });
        const json = await response.json();
        setDetails({id:details.id , name:name , email:email , contact:contact});
        getUserDetails(localStorage.getItem('token'));
        setuserLoad(false);
    }

    // Delete User Account
    const deleteUser = async(userid) => {
        setuserLoad(true);
        const response = await fetch(`${host}/api/user/deleteUser/${userid}` , {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json);
        setuserLoad(false);
    }

    return (
        <UserContext.Provider value={{ details , getUserDetails , editUser , deleteUser , userLoad , setuserLoad}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;