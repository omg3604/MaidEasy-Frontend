import React from 'react'
import { useState , useEffect , useContext } from 'react'
import userContext from '../context/user/userContext';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import BookingCard from './BookingCard';

function MyBookings(props) {

    const ucontext = useContext(userContext);
    const {userLoad , setuserLoad , UserBookings , getMyBookings} = ucontext;

    useEffect(() => {
      getMyBookings(localStorage.getItem('token'));
    }, [])
    
    
    if(userLoad){
        return <Spinner></Spinner>;
    }

    return (
        <div className='container mb-5'>
            <div className='row mt-3 mb-5 pb-3'>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                    <div className='d-flex justify-content-center align-items-center flex-wrap my-2'>
                        <Link className='btn bg-light' to='/'><i class="fa-solid fa-arrow-left fa-lg"></i></Link>
                        <h2 className='mx-5' style={{ color: "#19376D" }}> Bookings : </h2>
                    </div>
                </div>
                <hr></hr>
                <div className='d-flex justify-content-around flex-wrap'>
                    {!userLoad && <h5> { UserBookings.length==0 && `No Bookings found.`}</h5>}
                    {UserBookings.map((Booking) => {
                        return <BookingCard key={Booking._id} Booking={Booking} showAlert={props.showAlert}></BookingCard>;
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyBookings