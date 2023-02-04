import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPins } from '../../../store/pin';

function PinPage() {
	const history = useHistory();
	const dispatch = useDispatch()
    const pins = useSelector((state)=> Object.values(state.pin))
    const currentUser = useSelector((state) => state.session.user)



    useEffect(()=>{
        dispatch(getAllPins())
    },[dispatch])


    const CreatePinForm = async(e)=>{
        history.push('/pinform')

    }

    return(

        <div>
        <div>
        
            <h1>PINS I'VE CREATED</h1>
          

                {pins.map((pin)=>(

                   
                    <div key={pin.id}>
                    
                    {currentUser?.id === pin.userId &&(
                    <NavLink to={`/pins/${pin.id}`} activeClassName='active'>
                    {pin.title}
                    </NavLink>
                    )}

                    {currentUser?.id === pin.userId &&(
                    <NavLink to={`/pins/${pin.id}`}>
                    <img src={pin.imageUrl}></img>
                    </NavLink>

                    )}
                   

                    {currentUser?.id === pin.userId &&(
                    <li>
                    <a href= {pin.url}>
                    {pin.url}
                    </a>
                    
                    </li>
                   )}
                    </div>
                 
                    
                  ))}   
        
                



       
           
 
   
        </div>
       
        <button onClick={CreatePinForm}>Create Pins</button>
    </div>


    )
}

export default PinPage;
