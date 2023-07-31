import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkerContext from '../context/worker/workerContext';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import './Register.css'
import Select from 'react-select';

const HouseHelpForm = (props) => {

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const houseSizeOptions = [
    { value: '1', label: '1 BHK' },
    { value: '2', label: '2 BHK' },
    { value: '3', label: '3 BHK' },
    { value: '4', label: '4 BHK' },
    { value: '5', label: '5 BHK' }
  ];


  const [Bookingdetails, setBookingDetails] = useState({ houseSize : "" , address : "" , startDate:"" , salary:0});

  const wcontext = useContext(WorkerContext);
  const { workerLoad, BookWorker , setworkerLoad } = wcontext;

  let navigate = useNavigate();

  const onchange = (e) => {
    setBookingDetails({ ...Bookingdetails, [e.target.name]: e.target.value });
  }

  const onHouseSizeChange = (selectedhouseSize) => {
    if (selectedhouseSize) setBookingDetails({ ...Bookingdetails, houseSize: selectedhouseSize.value  , salary : selectedhouseSize.value*1000});
    else setBookingDetails({ ...Bookingdetails, houseSize: "" , salary:0});
  }

  const onSubmitClick = async (e) => {
    e.preventDefault();
    // console.log(Bookingdetails);
    // console.log(BookWorker.id);
    setworkerLoad(true);
    // API Call
    const { houseSize , address , startDate , salary} = Bookingdetails;
    if (houseSize.length <= 0) {
      props.showAlert("warning", "Please select your houseSize.");
    }
    else if (startDate.length <= 0) {
      props.showAlert("warning", "Please select a starting date.");
    }
    else if (address.length <= 0) {
      props.showAlert("warning", "Please provide your valid address");
    }
    else {
      const response = await fetch(`http://localhost:5000/api/worker/BookHouseHelp`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
        body: JSON.stringify({ workerID : BookWorker.id , name : BookWorker.name , address , salary , startDate , houseSize}), // body data type must match "Content-Type" header
      });

      const json = await response.json();
      if (json.status === "SUCCESS") {
        navigate("/");
        props.showAlert("success", "Your Booking has been successfully completed. Please see My Booking tab to see your Booking details.");
        setBookingDetails({ houseSize:"" , address:"" , startDate:"" , salary:0 });
      }
      else {
        props.showAlert("warning", json.message);
      }
    }
    setworkerLoad(false);
  }

  if (workerLoad) {
    return <Spinner />;
  }

  return (
    <div className='container my-5'>
      <section className="h-100 bg-light" style={{border: "2px solid lightgray"}}>
      <h3 className='text-center mt-3'>Booking Form</h3>
        <div className='container d-flex flex-wrap'>
          <div className="col-xl-6 d-flex">
            <div className="card-body p-md-5 text-black">
              <div className='row align-items-center'>
                <label htmlFor="houseSize" className='form-label'>Select House Size : </label>
                <Select
                  className="basic-single col-md-12"
                  classNamePrefix="select"
                  defaultValue=""
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="houseSize"
                  options={houseSizeOptions}
                  onChange={onHouseSizeChange}
                  required
                />
              </div>

              <div className="form-outline my-3">
              <label className="form-label" htmlFor="address">Address</label>
              <input type="text" id="address" name="address" className="form-control form-control-lg" onChange={onchange} value={Bookingdetails.address} required />
              </div>

              <div className="form-outline my-3">
                <label className="form-label" htmlFor="startDate">Start Date</label>
                <input type="date" id="startDate" name="startDate" className="form-control form-control-lg" onChange={onchange} value={Bookingdetails.startDate} required />
              </div>
            </div>
          </div>
          <div className="col-xl-6 d-flex">
            <div className="card-body p-md-5 text-black">
              <div className='d-flex flex-column my-3 align-items-center justify-content-around'>
                <div className="col-md-6 col-xl-8 mb-5 mt-3">
                  <div className="card p-3" style={{ color: "#fff", background: "linear-gradient(45deg,#19376D,grey)" }}>
                    <div className="card-block text-center">
                      <h6 className="m-b-20 h4">Estimated Monthly Salary : </h6>
                      <h2 className="text-right"><i className="fa-solid fa-indian-rupee-sign"></i><span>{Bookingdetails.salary}</span></h2>
                      <p className="m-b-0">*As per your needs</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mb-4 mt-0">
                  {/* <button type="button" className="btn btn-light btn-lg" onClick={onResetClick}>Reset all</button> */}
                  <button type="button" className="btn btn-warning btn-lg ms-2 btncss" onClick={onSubmitClick}>Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HouseHelpForm