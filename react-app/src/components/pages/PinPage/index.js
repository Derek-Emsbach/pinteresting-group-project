import React from "react";
import { useHistory } from "react-router-dom";

function PinPage(){

    const history = useHistory()
    const CreatePinForm = async(e)=>{
        history.push('/pinform')
    }

    return(
        <>
        <h1>Pins  here</h1>
        <button onClick={CreatePinForm}>Create Pins</button>
        </>
    )
}

export default PinPage