import React from "react";
import { useSelector } from "react-redux";
import profile from '../../../icons/profile.png'
import './Profile.css'
import { useHistory } from "react-router-dom";

function Profile(){
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const myPins = async(e)=>{
        history.push('/pins')
    }
    const myBoards = async(e)=>{
        history.push('/boards')
    }

    const profileForm = async(e)=>{
        history.push('/profileform')
    }
    return(
        <div className="profile_container">
         <div className="user_info">
         <img src={profile} alt=''></img>
        <h1>{sessionUser.username}</h1>
         <h4>{sessionUser.email}</h4>

                <div>
                <button>Share</button>
                <button onClick={profileForm}>Edit Profile</button>
                
                </div>
         
         </div>

         <div className="option">
         <button onClick={myPins}>My Pins</button>
         <button onClick={myBoards}> My boards</button>
         </div>
         
        </div>

    )
}
export default Profile