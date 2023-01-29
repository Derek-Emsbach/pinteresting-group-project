import React from "react";
import './HomePage.css'
import icon from '../../../icons/Pinterest-Logo-PNG9.png'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage(){

    const sessionUser = useSelector(state =>state.session.user)

    return (
        <>
        {!sessionUser&&(
        <div className="nav_bar">
            <div className="icon">
                <img src={icon} alt=''></img>
            </div>

            <div className="right_menu">

                <a href="/" alt='sdf'> About</a>
                <a href="/"> Business</a>
                <a href="/"> Blog</a>
                <NavLink to='/login' exact={true} activeClassName='active'>
                Login
               </NavLink>
               <NavLink to='/signup' exact={true} activeClassName='active'>
               Sign Up
               </NavLink>

            </div>
         
        </div>
    )}

        <div className="body">
    
        
        </div>

        </>
        
    )
}

export default HomePage