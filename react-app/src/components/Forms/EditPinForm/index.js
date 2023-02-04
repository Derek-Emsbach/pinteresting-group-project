import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { editAPin } from '../../../store/pin';


function EditPinForm(){

    const dispatch= useDispatch()
    const {pinId} = useParams()
    const allPins = useSelector((state) => state.pin);
    const specificPin = allPins[pinId];

    const [title,setTitle]=useState(specificPin.title)
    const [imageUrl,setImageUrl] = useState(specificPin.imageUrl)
    const [url, setUrl] = useState(specificPin.url)

    const history = useHistory()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        // setErrors([]);
    const payload = { title, imageUrl, url }
       let newPin
    // try{
       dispatch( editAPin(pinId,payload))
         history.push(`/pins/${specificPin.id}`);
    //    }catch(err){
    //     const data = await err.json()
    //     setErrors([...Object.values(data.errors)])
    //    }
      
    }

    return(
        <div>
        <form className='edit-form' onSubmit={handleSubmit}>
        <h1 className='update'>Update your pin!</h1>
        <ul>
        {/*{errors.map((error, idx) => (
          <li className='edit-errors' key={idx}>{error}</li>
        ))}
        */}
      </ul >

      <label>
      Title
      <input 
      type='text'
      value={title}
      required
      onChange={e=>setTitle(e.target.value)}
      />
      </label>

      <label>
      Image Url
      <input 
      type='text'
      value={imageUrl}
      required
      onChange={e=>setImageUrl(e.target.value)}
      />
      </label>

      <label>
      Link
      <input 
      type='text'
      value={url}
      required
      onChange={e=>setUrl(e.target.value)}
      />
      </label>
        
      <button className='submity' type="submit">Update Pin</button>
        </form>
        </div>
    )
}

export default EditPinForm