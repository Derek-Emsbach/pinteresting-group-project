import React, { useState } from "react";
import './Profile.css'


function Followers(){
    const [modalOpen, setModalOpen] = useState(false);

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