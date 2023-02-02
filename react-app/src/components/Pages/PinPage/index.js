import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPins } from '../../../store/pin';

function PinPage() {
	const history = useHistory();
	const dispatch = useDispatch();



    const pins = useSelector((state)=> Object.values(state.pins))
console.log(pins)
    useEffect(()=>{
        dispatch(getAllPins())
    },[dispatch])


    const CreatePinForm = async(e)=>{
        history.push('/pinform')

    }

    return(

        <div>
        <div>
            <h1>ALL PINS</h1>
          {pins.map((pin)=>(
            <div key={pin.id}>
            <h4> 
            <NavLink to={`/pins/${pin.id}`} activeClassName='active'>
            {pin.title}
            </NavLink>
            </h4>
            <li>{pin.url}</li>
            <li>{pin.imageUrl}</li>
            </div>
          ))}
        </div>
        <button onClick={CreatePinForm}>Create Pins</button>
    </div>


    )
}

export default PinPage;
