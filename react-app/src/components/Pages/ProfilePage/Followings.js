import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFollowingThunk } from "../../../store/following_follower";
import './Profile.css'
import './Following.css'
import profile from '../../../icons/profile.png'
import { useHistory } from "react-router-dom";


function Followings(){
    const [modalOpen, setModalOpen] = useState(false);
    const sessionUser = useSelector(state =>state.session.user)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const history = useHistory()
    const ref = useRef()

    const allMyFollowings= useSelector(state =>Object.values(state.following))

// useEffect(()=>{
//         const checkIfClickedOutside = (e)=>{
//             console.log(e.button)
//            if(e.button !== ref.current)
//                 setModalOpen(false)
            
//         }
//         document.addEventListener("click", checkIfClickedOutside);
//         return () =>{
//             document.removeEventListener("click", checkIfClickedOutside)
//         }
// },[modalOpen])
   

    if(modalOpen === true) {
        return(
            <div >
            
            {allMyFollowings &&(
            <div className="modalBackground" >
            <div className="modalContainer">
              <div className="titleCloseBtn">
                <button 
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  X
                </button>
              </div>
                 
                  {allMyFollowings.map(following =>{
                    return(
                        <button onClick={()=> history.push(`/users/${following.id}`)} className="following_container">
                            
                            <div className="following_profile"><img src={profile}/></div>
                            <div className="following_info">
                            <h3> {following.firstName} {following.lastName}</h3>
                             <h4>{following.username}</h4>
                            </div>
                            
                        </button>
                    )
                  })}
         
          
            </div>
          </div>
          )}
          </div>
        )
      }

    return(
        <div >
        <button ref={ref}
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Following
      </button>
        
        
        </div>

    )
}

export default Followings

