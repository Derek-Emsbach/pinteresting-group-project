import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Profile.css'
import profile from '../../../icons/profile.png'
import './Follower.css'



function Followers(){
    const [modalOpen, setModalOpen] = useState(false);
    const history = useHistory()




    const allMyFollowers= useSelector(state =>Object.values(state.follower))
    console.log(allMyFollowers)

    if(modalOpen === true) {
        return(
            <div className="modalBackground">
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

              {allMyFollowers.map(follower =>{
                return(
                    <button onClick={()=> history.push(`/users/${follower.id}`)} className="follower_container">
                        
                        <div className="follower_profile"><img src={profile}/></div>
                        <div className="follower_info">
                        <h3> {follower.firstName} {follower.lastName}</h3>
                         <h4>{follower.username}</h4>
                        </div>
                        
                    </button>
                )
              })}
         
          
            </div>
          </div>

        )
      }

    return(
        <div>
        <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Followers
      </button>
        
        
        </div>

    )
}

export default Followers