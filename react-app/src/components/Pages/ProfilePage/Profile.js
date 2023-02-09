import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import profile from '../../../icons/profile.png'
import './Profile.css'
import { useHistory, NavLink } from "react-router-dom";
import { follow, getAllFollowerThunk} from "../../../store/following_follower";
import { getAllFollowingThunk } from "../../../store/following";
import Followers from "./Followers";
import Followings from "./Followings";
import { getAllBoardsThunk } from "../../../store/board";

function Profile(){
    const sessionUser = useSelector(state => state.session.user)
    const [users, setUsers] = useState([]);
    const [openMyBoards,setOpenMyBoards] = useState(true)
    const [openCreate, setOpenCreate] = useState(false)
    const allMyFollowers= useSelector(state =>Object.values(state.follower))

    const allMyFollowings= useSelector(state =>Object.values(state.following))
    const boards = useSelector((state) => Object.values(state.board));
    const allMyBoards = boards.filter(board=>board.userId === sessionUser.id)
    console.log(boards)
console.log(allMyBoards,'ehllo')
  
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllFollowerThunk(sessionUser.id))
        
        dispatch(getAllFollowingThunk(sessionUser.id))
        dispatch(getAllBoardsThunk())
     
        },[dispatch,sessionUser.id])
        
    


    const myPins = async(e)=>{
        history.push('/pins')
    }
    // const myBoards = async(e)=>{
    //     history.push('/boards')
    // }

    const profileForm = async(e)=>{
        history.push(`/users/${sessionUser.id}`)
    }

   
    const following = async ()=>{
        await dispatch(follow(sessionUser.id))
    }



      
   


    return(
        <div className="profile_container">
         <div className="user_info">
         <img src={profile} alt=''></img>
        <div className="profile_info">
        <h1>{sessionUser.firstName} {sessionUser.lastName}</h1>
         <h4>@{sessionUser.username}</h4>
         <h3>{sessionUser.about}</h3>
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
                <button onClick={()=>{setOpenCreate(true); setOpenMyBoards(false)}}>Create</button>

                <button onClick={profileForm}>Edit Profile</button>

                </div>

         </div>

         <div className="option">
         <div className="option_btn">
         <button onClick={myPins}>My Pins</button>
         <button onClick={()=>{setOpenMyBoards(true); setOpenCreate(false)}}> My boards</button>
         </div>
        

         </div>

         <div className="all_my_boardImg">
         {openMyBoards &&(
                 allMyBoards.map(board =>{
                     return(
                     <button className="all_board_container" onClick={()=>history.push(`/boards/${board.id}`)}>
                         <div>
                         <img src={board.imageUrl} alt=''/>
                         </div>
                         <div>
                             {board.title}
                         </div>
                          
                         
                     </button>
                     )
                 })
                
             )

         }
         </div>

         {openCreate &&(
                <div className="create_pin_container">
                <h1> Inspire with an Idea Pin</h1>
                <button onClick={()=> history.push('/pinform')} className='create_pin_btn'>Create</button>
                </div>
            
         )}



        </div>
         

    )
}
export default Profile
