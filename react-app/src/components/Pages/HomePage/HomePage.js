import React, {useEffect, useState} from "react";
import './HomePage.css'
import icon from '../../../icons/Pinterest-Logo-PNG9.png'
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignupFormModal from "../../SignUpFormModal";
import Modal from "../../Modal/Modal";
import { login } from '../../../store/session'
import DemoButton from "../../DemoButton/DemoButton";

function HomePage(){
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state =>state.session.user)
    const [modalOpen, setModalOpen] = useState(false);


  
        const demo = async (e)=>{
            const user ={
                email:'bobbie@aa.io',
                password:'password'
            }
           await dispatch(login(user.email, user.password))
           history.push('/')
        }
    

    return (
        <>
    
        {!sessionUser&&(
        <div className="nav_bar">
            <div className="icon">
                <img src={icon} alt=''></img>
            </div>

            <div className="right_menu">

            <button onClick={demo}>Sign in as Demo User</button>
                
                <NavLink to='/login' exact={true} activeClassName='active'>
                Login
               </NavLink>           
                
               <button
               className="openModalBtn"
               onClick={() => {
                 setModalOpen(true);
               }}
             >
               Sign Up
             </button>

             {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
         
        </div>
    )}


        </>
        
    )
}

export default HomePage