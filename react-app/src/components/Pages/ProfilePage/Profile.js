import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import Followers from "./Followers";
import Followings from "./Followings";
import "./Profile.css";

function Profile() {
  const currentUser = useSelector((state) => state.session.user);
  const [openMyBoards,setOpenMyBoards] = useState(true);
  const [openCreate, setOpenCreate] = useState(false);
  const history = useHistory();

  const boards = useSelector((state) => Object.values(state.board));
  const allMyBoards = boards.filter(board=>board.userId === currentUser.id)

  const myPins = async (e) => {
    history.push("/pins");
  };
  const myBoards = async (e) => {
    history.push("/boards");
  };

  const profileForm = async (e) => {
    history.push(`/users/${currentUser.id}`);
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="profile_container">
      <div className="user_info">
        <img src={currentUser.image}></img>
        <div className="profile_info">
          <h1>
            {currentUser.firstName} {currentUser.lastName}
          </h1>
          <h3>{currentUser.about}</h3>
          <h4>{currentUser.email}</h4>
        </div>

        <div className="follow-container">
          <div className="follower_container">
            {currentUser.followers.length}

            <Followers />
          </div>

          <div className="following_container">
            {currentUser.following.length}

            <Followings />
          </div>
        </div>

        <button className="regular-button" onClick={profileForm}>
          Edit Profile
        </button>
      </div>

      <div className="option">
      <div className="option_btn">
         
      <button onClick={()=>{setOpenCreate(true); setOpenMyBoards(false)}} className={ `button ${openCreate ? 'active' : null}`}> <span>Create</span></button>
      <button onClick={()=>{setOpenMyBoards(true); setOpenCreate(false)}} className={ `button ${openMyBoards ? 'active' : null}`}><span>My boards</span> </button>
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
  );
}
export default Profile;