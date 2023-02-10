import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPins } from '../../store/pin';


function Pin(props) {

    const history = useHistory();
	const dispatch = useDispatch();


    const pins = useSelector((state)=> Object.values(state.pin))

    useEffect(()=>{
        dispatch(getAllPins())
    },[dispatch])


    return (
        <div style ={{
            ...styles.pin,
            ...styles[props.size]
        }}>


        </div>
    )
}



export default Pin;
