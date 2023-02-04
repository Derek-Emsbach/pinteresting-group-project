import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPins } from '../../store/pin';


function Pin(props) {

    const history = useHistory();
	const dispatch = useDispatch();


    const pins = useSelector((state)=> Object.values(state.pin))
console.log(pins)
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

const styles = {
    pin:{
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'lightgrey'
    },
    small:{
        gridRowEnd: 'span 26'
    },
    medium:{
        gridRowEnd: 'span 33'
    },
    large:{
        gridRowEnd: 'span 45'
    }
}

export default Pin;