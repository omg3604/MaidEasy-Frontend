import React from 'react'
import { useState , useEffect , useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../context/user/userContext';

function BookingCard(props) {

    let navigate = useNavigate();
    const ucontext = useContext(userContext);
    const {deleteBooking} = ucontext;

    const onCancelClick = () => {
        deleteBooking(props.Booking._id , localStorage.getItem('token'));
        props.showAlert('success' , 'Booking cancelled successfully');
    }

    return (
        <div className='m-4'>
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title"><strong>Name : {props.Booking.name} </strong></h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item "><strong>Start Date </strong> : {props.Booking.startDate.substr(0,10)} </li>
                    <li class="list-group-item"><strong>Salary </strong>:  &#x20B9; {props.Booking.salary}</li>
                    <li class="list-group-item"><strong>Experience </strong>: {props.Booking.experience}</li>
                    <li class="list-group-item"><strong>Respect </strong>: {props.Booking.respect}</li>
                </ul>
                <button className="btn btncss" onClick={onCancelClick}>Cancel Booking</button>
            </div>
        </div>
    )
}

export default BookingCard