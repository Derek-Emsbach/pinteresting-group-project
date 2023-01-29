import React from "react";
import { useSelector } from "react-redux";
import profile from '../../../icons/profile.png'
import './Profile.css'


function Profile(){
    const sessionUser = useSelector(state => state.session.user)
  
    return(
        <div className="profile_container">
         <div className="user_info">
         <img src={profile} alt=''></img>
        <h1>{sessionUser.username}</h1>
         <h4>{sessionUser.email}</h4>

                <div>
                <button>Share</button>
                <button>Edit Profile</button>
                
                </div>
         
         </div>

         <div className="option">
         <button>Create a Pin</button>
         <button> My boards</button>
         </div>
         
        </div>

    )
}
export default Profile