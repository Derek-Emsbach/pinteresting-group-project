import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { update_profile } from '../../../store/session';
import './EditProfile.css'

function EditProfileForm(){
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state=>state.session.user)
    const [id, setId] = useState(sessionUser.id)
    const [firstName, setFirstName] = useState(sessionUser.firstName)
    const [lastName, setLastName] = useState(sessionUser.lastName)
    const [about, setAbout] = useState(sessionUser.about)
    const [username, setUserName] = useState(sessionUser.username)


    const handleSubmit= async (e)=>{
    

        e.preventDefault();
        
        const payload ={
                id,
               firstName,
               lastName,
               about,
               username

            }
            
            //!!START SILENT
       
             await dispatch(update_profile(sessionUser.id,payload));

              // If error is not a ValidationError, add slice at the end to remove extra
              // "Error: "
            //!!END
           
            history.push(`/${sessionUser.username}`);
        
        }
   

    return(
      <div className="profile_container">
        <div className="profile_header">
            <h1> Public profile</h1>
            <h4> People visiting your profile will see the following info</h4>
        <form onSubmit={handleSubmit}>
            <div className='pro_photo'>
            <label>Photo</label>
            <input type="file"
            title ="Upload a picture of your place"
            name="previewImage"
            placeholder="Image URL">
            </input>
            </div>

            <div className='first_last_name'>
            <label>First name</label>
            <input type='text'
            required
            value={firstName}
            onChange={(e) =>setFirstName(e.target.value)}>
      
            </input>
            
            <label>Last name</label>
            <input type='text'
            required
            value={lastName}
            onChange={(e) =>setLastName(e.target.value)}>

            </input>
            </div>
            
            <label>About</label>
            <input type='text'
            value={about}
            onChange={(e) =>setAbout(e.target.value)}>
      
            </input>

            <label>Username</label>
            <input type='text'
            required
            value={username}
            onChange={(e) =>setAbout(e.target.value)}>
      
            </input>
           
            <button type='submit'>Continue</button>
            </form>
        </div>
      
      
      </div>
    )
}

export default EditProfileForm