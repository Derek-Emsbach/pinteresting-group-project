import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { getAllPins } from "../../../store/pin";


function PinPage(){

    const history = useHistory()
    const dispatch = useDispatch()

    const pins = useSelector((theEntireReduxStore)=>{
        return Object.values(theEntireReduxStore.pins)
    })

    useEffect(()=>{
        dispatch(getAllPins())
    },[dispatch])


    const CreatePinForm = async(e)=>{
        history.push('/pinform')

    }

    return(

        <ul>
        <div>
            <h1>ALL PINS</h1>
          {pins.map((pin)=>(
            <div key={pin.id}>
            <h4>{pin.title}</h4>
            </div>
          ))}
        </div>
        <button onClick={CreatePinForm}>Create Pins</button>
    </ul>


    )
}

export default PinPage