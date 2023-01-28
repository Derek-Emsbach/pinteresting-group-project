import React from "react";
import './HomePage.css'
import icon from '../../icons/Pinterest-Logo-PNG9.png'
import { NavLink } from "react-router-dom";
import body from '../../icons/Screen Shot 2023-01-26 at 10.44.04 PM.png'

function HomePage(){

    return (
        <>

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
               <NavLink to='/sign-up' exact={true} activeClassName='active'>
               Sign Up
               </NavLink>

            </div>
         
        </div>

        <div className="body">
        <img src={body}></img>
        
        </div>

        </>
        
    )
}

export default HomePage