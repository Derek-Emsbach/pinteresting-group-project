import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import profile from '../../../icons/profile.png'
import './Profile.css'
import { useHistory, NavLink } from "react-router-dom";
import { follow, getAllFollowerThunk} from "../../../store/following_follower";
import { getAllFollowingThunk } from "../../../store/following";
import Followers from "./Followers";
import Followings from "./Followings";

function Profile(){
    const sessionUser = useSelector(state => state.session.user)
    const [users, setUsers] = useState([]);

    const history = useHistory()
    const dispatch = useDispatch()
    const myPins = async(e)=>{
        history.push('/pins')
    }
    const myBoards = async(e)=>{
        history.push('/boards')
    }

    const profileForm = async(e)=>{
        history.push(`/users/${sessionUser.id}`)
    }

    const allMyFollowers= useSelector(state =>Object.values(state.follower))

    const allMyFollowings= useSelector(state =>Object.values(state.following))
    

  
  
  

   
    const following = async ()=>{
        await dispatch(follow(sessionUser.id))
    }



    useEffect(()=>{
        dispatch(getAllFollowerThunk(sessionUser.id))
        
        dispatch(getAllFollowingThunk(sessionUser.id))
     
        },[dispatch,sessionUser.id])
        
    

      
   


    return(
        <div className="profile_container">
         <div className="user_info">
         <img src={profile} alt=''></img>
        <div className="profile_info">
        <h1>{sessionUser.firstName} {sessionUser.lastName}</h1>
        <h3>{sessionUser.about}</h3>
         <h4>{sessionUser.email}</h4>
         </div>


         {allMyFollowings && allMyFollowers &&(
         <div className="follow-container">
            
                <div className="follower_container">
                    {allMyFollowers.length}
                 
                    <Followers/>
                </div>
                       
                <div className="following_container">
                    {allMyFollowings.length}

                    <Followings/>
                </div>

            
         </div>
         )}

                <div>
                <button>Share</button>

                <button onClick={profileForm}>Edit Profile</button>

                <button onClick={()=>dispatch(following)}>Follow</button>

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
