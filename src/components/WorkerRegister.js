import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkerContext from '../context/worker/workerContext';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import './Register.css'
import Select from 'react-select';
import { stateOptions, cityOptions, genderOptions } from '../data'

const WorkerRegister = (props) => {

    const host = "https://nice-cyan-gorilla-tux.cyclic.cloud";

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    const occupationOptions = [
        { value: 'HouseHelp', label: 'HouseHelp' },
        { value: 'Cook', label: 'Cook' },
        { value: 'Babysitter', label: 'Babysitter' },
        { value: 'Office Boy', label: 'Office Boy' },
        { value: 'Driver', label: 'Driver' }
    ];

    const [details, setDetails] = useState({ name: "", contact: "", age: "", gender: "", city: "", state: "", occupation: "", expectedSalary: "" });

    const wcontext = useContext(WorkerContext);
    const { workerLoad, setworkerLoad } = wcontext;

    let navigate = useNavigate();

    const onchange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const onGenderChange = (selectedGender) => {
        if (selectedGender) setDetails({ ...details, gender: selectedGender.value });
        else setDetails({ ...details, gender: "" });
    }

    const onStateChange = (selectedState) => {
        if (selectedState) setDetails({ ...details, state: selectedState.value });
        else setDetails({ ...details, state: "" });
    }

    const onCityChange = (selectedCity) => {
        if (selectedCity) setDetails({ ...details, city: selectedCity.value });
        else setDetails({ ...details, city: "" });
    }

    const onOccupationChange = (selectedOccupation) => {
        if (selectedOccupation) setDetails({ ...details, occupation: selectedOccupation.value });
        else setDetails({ ...details, occupation: "" });
    }

    const onSubmitClick = async (e) => {
        e.preventDefault();
        console.log(details);
        setworkerLoad(true);
        // API Call
        const { name, gender, contact, age, state, city, occupation, expectedSalary } = details;
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
        else if (expectedSalary == "") {
            props.showAlert("warning", "Please enter your expected Monthly salary.");
        }
        else {
            const response = await fetch(`${host}/api/worker/registerWorker`, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, gender, contact, age, state, city, occupation, expectedSalary }), // body data type must match "Content-Type" header
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
                setDetails({ name: "", contact: "", age: "", gender: "", city: "", state: "", occupation: "", expectedSalary: "" });
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
                <div className="container pb-5 h-100">
                    <Link className='btn bg-light rounded-circle py-2' to='/Register'><i className="fa-solid fa-arrow-left fa-lg"></i></Link>
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                        <div className="col" >
                            <div className="card card-registration my-4" style={{boxShadow : "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
                                <div className="row g-0">
                                    <h3 className="m-3 text-uppercase text-center" style={{color : "#0B2447"}}>Worker registration form</h3>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <div className="form-outline my-2">
                                                <label className="form-label" htmlFor="name">Name / नाम : </label>
                                                <input type="text" id="name" name="name" className="form-control form-control-lg" onChange={onchange} value={details.name} required />
                                            </div>

                                            <div className="form-outline my-2">
                                                <label className="form-label" htmlFor="contact">Contact / फ़ोन नंबर : </label>
                                                <input type="text" id="contact" name="contact" className="form-control form-control-lg" onChange={onchange} value={details.contact} required />
                                            </div>

                                            <div className="form-outline my-2">
                                                <label className="form-label" htmlFor="age">Age (in Years) / उम्र : </label>
                                                <input type="text" id="age" name="age" className="form-control form-control-lg" onChange={onchange} value={details.age} required />
                                            </div>

                                            <div className='row my-2'>
                                                <label htmlFor="gender" className='form-label'>Gender / लिंग : </label>
                                                <Select
                                                    className="basic-single col-md-12"
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

                            
                                        </div>
                                    </div>

                                    <div className='col-xl-6'>
                                        <div className="card-body p-md-5 text-black">
                                        <div className='row my-2'>
                                                <label htmlFor="state" className='form-label'>Select State / राज्य चुनें : </label>
                                                <Select
                                                    className="basic-single col-md-12"
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

                                            <div className='row my-3'>
                                                <label htmlFor="city" className='form-label'>Select City / शहर चुनें : </label>
                                                <Select
                                                    className="basic-single col-md-12"
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

                                            <div className='row my-3'>
                                                <label htmlFor="occupation" className='form-label'>Occupation / पेशा : </label>
                                                <Select
                                                    className="basic-single col-md-12"
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

                                            <div className="form-outline my-2">
                                                <label className="form-label" htmlFor="expectedSalary">Expected Monthly Salary / प्रत्याशित मासिक वेतन : </label>
                                                <input type="text" id="expectedSalary" name="expectedSalary" className="form-control form-control-lg" onChange={onchange} value={details.expectedSalary} required />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mb-4 mt-0">
                                        {/* <button type="button" className="btn btn-light btn-lg" onClick={onResetClick}>Reset all</button> */}
                                        <button type="button" className="btn btncss btn-lg ms-2" onClick={onSubmitClick}>Submit form / फार्म जमा करें</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkerRegister