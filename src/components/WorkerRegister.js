import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkerContext from '../context/worker/workerContext';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import './Register.css'
import Select from 'react-select';

const WorkerRegister = (props) => {

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    const stateOptions = [
        { value: 'Andaman and Nicobar Islands', label: 'Andaman and Nicobar Islands' },
        { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
        { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
        { value: 'Assam', label: 'Assam' },
        { value: 'Bihar', label: 'Bihar' },
        { value: 'Chandigarh', label: 'Chandigarh' },
        { value: 'Chhattisgarh', label: 'Chhattisgarh' },
        { value: 'Dadra and Nagar Haveli', label: 'Dadra and Nagar Haveli' },
        { value: 'Daman and Diu', label: 'Daman and Diu' },
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Goa', label: 'Goa' },
        { value: 'Gujarat', label: 'Gujarat' },
        { value: 'Haryana', label: 'Haryana' },
        { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
        { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
        { value: 'Jharkhand', label: 'Jharkhand' },
        { value: 'Karnataka', label: 'Karnataka' },
        { value: 'Kerala', label: 'Kerala' },
        { value: 'Ladakh', label: 'Ladakh' },
        { value: 'Lakshadweep', label: 'Lakshadweep' },
        { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
        { value: 'Maharashtra', label: 'Maharashtra' },
        { value: 'Manipur', label: 'Manipur' },
        { value: 'Meghalaya', label: 'Meghalaya' },
        { value: 'Mizoram', label: 'Mizoram' },
        { value: 'Nagaland', label: 'Nagaland' },
        { value: 'Odisha', label: 'Odisha' },
        { value: 'Puducherry', label: 'Puducherry' },
        { value: 'Punjab', label: 'Punjab' },
        { value: 'Rajasthan', label: 'Rajasthan' },
        { value: 'Sikkim', label: 'Sikkim' },
        { value: 'Tamil Nadu', label: 'Tamil Nadu' },
        { value: 'Telangana', label: 'Telangana' },
        { value: 'Tripura', label: 'Tripura' },
        { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
        { value: 'Uttarakhand', label: 'Uttarakhand' },
        { value: 'West Bengal', label: 'West Bengal' },
    ];

    const cityOptions = [
        { value: 'Agra', label: 'Agra' },
        { value: 'Ahmedabad', label: 'Ahmedabad' },
        { value: 'Alappuzha', label: 'Alappuzha' },
        { value: 'Alwar', label: 'Alwar' },
        { value: 'Amritsar', label: 'Amritsar' },
        { value: 'Aurangabad', label: 'Aurangabad' },
        { value: 'Bangalore', label: 'Bangalore' },
        { value: 'Bharatpur', label: 'Bharatpur' },
        { value: 'Bhavnagar', label: 'Bhavnagar' },
        { value: 'Bhikaner', label: 'Bhikaner' },
        { value: 'Bhopal', label: 'Bhopal' },
        { value: 'Bhubaneshwar', label: 'Bhubaneshwar' },
        { value: 'Bodh Gaya', label: 'Bodh Gaya' },
        { value: 'Calangute', label: 'Calangute' },
        { value: 'Chandigarh', label: 'Chandigarh' },
        { value: 'Chennai', label: 'Chennai' },
        { value: 'Chittaurgarh', label: 'Chittaurgarh' },
        { value: 'Coimbatore', label: 'Coimbatore' },
        { value: 'Cuttack', label: 'Cuttack' },
        { value: 'Dalhousie', label: 'Dalhousie' },
        { value: 'Dehradun', label: 'Dehradun' },
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Diu-Island', label: 'Diu-Island' },
        { value: 'Ernakulam', label: 'Ernakulam' },
        { value: 'Faridabad', label: 'Faridabad' },
        { value: 'Gaya', label: 'Gaya' },
        { value: 'Gangtok', label: 'Gangtok' },
        { value: 'Ghaziabad', label: 'Ghaziabad' },
        { value: 'Gurgaon', label: 'Gurgaon' },
        { value: 'Guwahati', label: 'Guwahati' },
        { value: 'Gwalior', label: 'Gwalior' },
        { value: 'Haridwar', label: 'Haridwar' },
        { value: 'Hyderabad', label: 'Hyderabad' },
        { value: 'Imphal', label: 'Imphal' },
        { value: 'Indore', label: 'Indore' },
        { value: 'Jabalpur', label: 'Jabalpur' },
        { value: 'Jaipur', label: 'Jaipur' },
        { value: 'Jaisalmer', label: 'Jaisalmer' },
        { value: 'Jalandhar', label: 'Jalandhar' },
        { value: 'Jamshedpur', label: 'Jamshedpur' },
        { value: 'Jodhpur', label: 'Jodhpur' },
        { value: 'Junagadh', label: 'Junagadh' },
        { value: 'Kanpur', label: 'Kanpur' },
        { value: 'Kanyakumari', label: 'Kanyakumari' },
        { value: 'Khajuraho', label: 'Khajuraho' },
        { value: 'Khandala', label: 'Khandala' },
        { value: 'Kochi', label: 'Kochi' },
        { value: 'Kodaikanal', label: 'Kodaikanal' },
        { value: 'Kolkata', label: 'Kolkata' },
        { value: 'Kota', label: 'Kota' },
        { value: 'Kottayam', label: 'Kottayam' },
        { value: 'Kovalam', label: 'Kovalam' },
        { value: 'Lucknow', label: 'Lucknow' },
        { value: 'Ludhiana', label: 'Ludhiana' },
        { value: 'Madurai', label: 'Madurai' },
        { value: 'Manali', label: 'Manali' },
        { value: 'Mangalore', label: 'Mangalore' },
        { value: 'Margao', label: 'Margao' },
        { value: 'Mathura', label: 'Mathura' },
        { value: 'Mountabu', label: 'Mountabu' },
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Mussoorie', label: 'Mussoorie' },
        { value: 'Mysore', label: 'Mysore' },
        { value: 'Manali', label: 'Manali' },
        { value: 'Nagpur', label: 'Nagpur' },
        { value: 'Nainital', label: 'Nainital' },
        { value: 'Noida', label: 'Noida' },
        { value: 'Ooty', label: 'Ooty' },
        { value: 'Orchha', label: 'Orchha' },
        { value: 'Panaji', label: 'Panaji' },
        { value: 'Patna', label: 'Patna' },
        { value: 'Pondicherry', label: 'Pondicherry' },
        { value: 'Porbandar', label: 'Porbandar' },
        { value: 'Portblair', label: 'Portblair' },
        { value: 'Pune', label: 'Pune' },
        { value: 'Puri', label: 'Puri' },
        { value: 'Pushkar', label: 'Pushkar' },
        { value: 'Rajkot', label: 'Rajkot' },
        { value: 'Rameswaram', label: 'Rameswaram' },
        { value: 'Ranchi', label: 'Ranchi' },
        { value: 'Sanchi', label: 'Sanchi' },
        { value: 'Secunderabad', label: 'Secunderabad' },
        { value: 'Shimla', label: 'Shimla' },
        { value: 'Surat', label: 'Surat' },
        { value: 'Thanjavur', label: 'Thanjavur' },
        { value: 'Thiruchchirapalli', label: 'Thiruchchirapalli' },
        { value: 'Thrissur', label: 'Thrissur' },
        { value: 'Tirumala', label: 'Tirumala' },
        { value: 'Udaipur', label: 'Udaipur' },
        { value: 'Vadodra', label: 'Vadodra' },
        { value: 'Varanasi', label: 'Varanasi' },
        { value: 'Vasco-Da-Gama', label: 'Vasco-Da-Gama' },
        { value: 'Vijayawada', label: 'Vijayawada' },
        { value: 'Visakhapatnam', label: 'Visakhapatnam' }
    ];

    const genderOptions = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Others', label: 'Others' }
    ];

    const occupationOptions = [
        { value: 'HouseHelp', label: 'HouseHelp' },
        { value: 'Cook', label: 'Cook' },
        { value: 'Babysitter', label: 'Babysitter' },
        { value: 'Care Taker', label: 'Care Taker' },
        { value: 'Driver', label: 'Driver' }
    ];

    const [details, setDetails] = useState({ name: "", contact: "", age: "", gender: "", city: "", state: "", occupation: "" });

    const wcontext = useContext(WorkerContext);
    const { workerLoad, setworkerLoad } = wcontext;

    let navigate = useNavigate();

    const onchange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const onGenderChange = (selectedGender) => {
        setDetails({ ...details, gender: selectedGender.value });
    }

    const onStateChange = (selectedState) => {
        setDetails({ ...details, state: selectedState.value });
    }

    const onCityChange = (selectedCity) => {
        setDetails({ ...details, city: selectedCity.value });
    }

    const onOccupationChange = (selectedOccupation) => {
        setDetails({ ...details, occupation: selectedOccupation.value });
    }

    const onSubmitClick = async (e) => {
        e.preventDefault();
        console.log(details);
        setworkerLoad(true);
        // API Call
        const { name, gender, contact, age, state, city, occupation } = details;
        if (gender.length <= 0) {
            props.showAlert("warning", "Please select your gender.");
        }
        else if (city.length <= 0) {
            props.showAlert("warning", "Please select your City.");
        }
        else if (state.length <= 0) {
            props.showAlert("warning", "Please select your State.");
        }
        else if (contact.length <= 0) {
            props.showAlert("warning", "Please enter a valid 10 digit Contact Number.");
        }
        else if (age < "18") {
            props.showAlert("warning", "Minimum Age requirement is 18 years and above.");
        }
        else {
            const response = await fetch(`http://localhost:5000/api/worker/registerWorker`, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, gender, contact, age, state, city, occupation }), // body data type must match "Content-Type" header
            });

            const json = await response.json();
            if (json.status === "SUCCESS") {
                // const userId = json.data.userId;
                // localStorage.setItem('userid', userId);
                // localStorage.setItem('username', email);
                // console.log(json);
                // console.log(userId);
                navigate("/");
                props.showAlert("success", "Your have been registered successfully, Soon Our team will review your application.");
                setDetails({ name: "", contact: "", age: "", gender: "", city: "", state: "", occupation: "" });
            }
            else {
                //console.log(json);
                props.showAlert("warning", json.message);
            }
        }
        setworkerLoad(false);
    }

    if (workerLoad) {
        return <Spinner />;
    }

    return (
        <div className='container'>
            <section className="h-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <h3 className="m-3 text-uppercase text-center ">Worker registration form</h3>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <div className="row">
                                                <div className="my-3">
                                                    <div className="form-outline">
                                                        <input type="text" id="name" name="name" className="form-control form-control-lg" onChange={onchange} value={details.name} required />
                                                        <label className="form-label" htmlFor="name">Name</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='d-flex my-3 align-items-center'>
                                                <label htmlFor="gender" className=''>Select Gender : </label>
                                                <Select
                                                    className="basic-single col-md-8 mx-2"
                                                    classNamePrefix="select"
                                                    defaultValue=""
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="gender"
                                                    options={genderOptions}
                                                    onChange={onGenderChange}
                                                    required
                                                />
                                            </div>

                                            <div className="form-outline my-5">
                                                <input type="text" id="contact" name="contact" className="form-control form-control-lg" onChange={onchange} value={details.contact} required />
                                                <label className="form-label" htmlFor="contact">Contact</label>
                                            </div>

                                            <div className="form-outline my-5">
                                                <input type="text" id="age" name="age" className="form-control form-control-lg" onChange={onchange} value={details.age} required />
                                                <label className="form-label" htmlFor="age">Age (in Years)</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6'>
                                        <div className="card-body p-md-5 text-black">
                                            <div className='d-flex my-5 align-items-center'>
                                                <label htmlFor="state" className='mx-3 my-0'>Select State : </label>
                                                <Select
                                                    className="basic-single col-md-8"
                                                    classNamePrefix="select"
                                                    defaultValue=""
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="state"
                                                    options={stateOptions}
                                                    onChange={onStateChange}
                                                    required
                                                />
                                            </div>

                                            <div className='d-flex my-5 align-items-center'>
                                                <label htmlFor="city" className='mx-3 my-0'>Select City : </label>
                                                <Select
                                                    className="basic-single col-md-8"
                                                    classNamePrefix="select"
                                                    defaultValue=""
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="city"
                                                    options={cityOptions}
                                                    onChange={onCityChange}
                                                    required
                                                />

                                            </div>

                                            <div className='d-flex my-5 align-items-center'>
                                                <label htmlFor="occupation" className='mx-3 my-0'>Select Occupation : </label>
                                                <Select
                                                    className="basic-single col-md-6"
                                                    classNamePrefix="select"
                                                    defaultValue=""
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name="occupation"
                                                    options={occupationOptions}
                                                    onChange={onOccupationChange}
                                                    required
                                                />

                                            </div>

                                            {/* <div className="form-outline mb-4">
                                                <input type="text" id="form3Example9" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example9">DOB</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example97" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example97">Email ID</label>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mb-4 mt-0">
                                        {/* <button type="button" className="btn btn-light btn-lg" onClick={onResetClick}>Reset all</button> */}
                                        <button type="button" className="btn btn-warning btn-lg ms-2" onClick={onSubmitClick}>Submit form</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="container my-5 pb-5" >
                <hr />
                <div className="card text-black" style={{ borderColor: "white" }}>
                    <div className="card-body p-md-3">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 p-3 " style={{ backgroundColor: "white", borderRadius: "20px" }}>

                                <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: "#19376D" }}>Sign up</p>

                                <form className="mx-1 mx-md-3" onSubmit={signupSubmit}>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <label className="form-label me-3" htmlFor="name">Name</label>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="text" id="name" name="name" className="form-control" onChange={onchange} required minLength={5} />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <label className="form-label me-3" htmlFor="email">Contact</label>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="text" id="contact" name="contact" className="form-control" onChange={onchange} required />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <label className="form-label me-3" htmlFor="age">Age</label>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="number" id="age" name="age" className="form-control" onChange={onchange} required />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <label className="form-label me-3" htmlFor="password">Password</label>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="password" id="password" name="password" className="form-control" onChange={onchange} required minLength={6} />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <label className="form-label me-3" htmlFor="cpassword">Password</label>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="password" id="cpassword" name="cpassword" className="form-control" onChange={onchange} required minLength={6} />
                                            <label className="form-label" htmlFor="cpassword">*Confirm your password</label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="submit" className='btn btn-primary mx-2 btn-rounded signbtn'>Submit</button>
                                    </div>
                                </form>
                                <div className='d-flex justify-content-center'>
                                    <Link className="link float-start linkstyle text-center" to="/Login">Already a User? Login into Account!</Link>
                                </div>
                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                    className="img-fluid rounded " alt="Sample image" />

                            </div>
                        </div>
                    </div>
                </div>
                <hr className='mb-5'></hr>
            </div> */}
        </div>
    )
}

export default WorkerRegister