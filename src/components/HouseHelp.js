import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import workerContext from '../context/worker/workerContext';
import WorkerCard from './WorkerCard'
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import { stateOptions, cityOptions, genderOptions } from '../data'
import Select from 'react-select';

function HouseHelp(props) {

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    let navigate = useNavigate();

    const Wcontext = useContext(workerContext);
    const { getVerifiedWorkers, verifiedWorkers, workerLoad } = Wcontext;

    const [selectedState, setselectedState] = useState("");
    const [selectedCity, setselectedCity] = useState("")

    useEffect(() => {
        getVerifiedWorkers();
    }, [])

    const onStateChange = (State) => {
        if (State) {
            setselectedState(State.value);
        }
        else {
            setselectedState("");
        }
    }

    const onCityChange = (City) => {
        if (City) {
            setselectedCity(City.value);
        }
        else {
            setselectedCity("");
        }
    }

    return (
        <div className='container'>

            <div className='row mb-5 pb-3 d-flex justify-content-center'>
                {/* <img src={require('../images/HouseHelp.png')}  style={{ width: "15rem", height: "10rem" , marginBottom:"-4.8rem"}} className='me-5'></img> */}
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                    <div className='d-flex justify-content-center align-items-center flex-wrap my-2'>
                        <Link className='btn bg-light rounded-circle py-2' to='/Services'><i class="fa-solid fa-arrow-left fa-lg"></i></Link>
                        <h2 className='mx-5' style={{ color: "#19376D" }}> HouseHelps : </h2>
                    </div>
                    <div className='d-flex justify-content-between align-items-center flex-wrap my-2'>
                        <div className='d-flex mb-2 align-items-center mx-4'>
                            <label htmlFor="state" className='mx-2 my-0'>State: </label>
                            <Select
                                className="basic-single col-md-10"
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
                        <div className='d-flex mb-2 align-items-center mx-4'>
                            <label htmlFor="city" className='mx-2 my-0'>City: </label>
                            <Select
                                className="basic-single col-md-10 "
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
                    </div>

                </div>
                <hr></hr>
                <div className='d-flex justify-content-center flex-wrap'>
                    {!workerLoad && <h5>{verifiedWorkers.filter(w => w.occupation == "HouseHelp").length === 0 && `No HouseHelps found.`}</h5>}

                    {/* When no state or city is selected */}
                    {!workerLoad && selectedState == "" && selectedCity == "" && verifiedWorkers.filter(w => w.occupation == "HouseHelp").map((worker) => {
                        return <WorkerCard key={worker._id} vworker={worker}></WorkerCard>;
                    }
                    )}

                    {/* when only state is selected */}
                    {!workerLoad && !selectedState == "" && selectedCity == "" && verifiedWorkers.filter(w => w.occupation == "HouseHelp" && w.state == selectedState).map((worker) => {
                        return <WorkerCard key={worker._id} vworker={worker}></WorkerCard>;
                    }
                    )}

                    {/* When only city is selected */}
                    {!workerLoad && !selectedCity == "" && selectedState == "" && verifiedWorkers.filter(w => w.occupation == "HouseHelp" && w.city == selectedCity).map((worker) => {
                        return <WorkerCard key={worker._id} vworker={worker}></WorkerCard>;
                    }
                    )}

                    {/* When both city and state are selectec */}
                    {!workerLoad && !selectedCity == "" && !selectedState == "" && verifiedWorkers.filter(w => w.occupation == "HouseHelp" && w.city == selectedCity && w.state == selectedState).map((worker) => {
                        return <WorkerCard key={worker._id} vworker={worker}></WorkerCard>;
                    }
                    )}

                </div>
                {workerLoad && <Spinner />}
            </div>
        </div>
    )
}

export default HouseHelp;