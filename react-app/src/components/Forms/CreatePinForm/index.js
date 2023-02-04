import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addAPin, editAPin } from "../../../store/pin";

function CreatePinForm() {
    const dispatch = useDispatch();
 

    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([])
 
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const payload = { title, imageUrl, url  };
        dispatch(addAPin(payload));
       console.log(payload)
        history.push(`/pins`);
     
    };

    return (
        <div>
            <form className="edit-form" onSubmit={handleSubmit}>
                <h1 className="update">Update your pin!</h1>
                <ul>
                    {errors.map((error, idx) => (
          <li className='edit-errors' key={idx}>{error}</li>
        ))}
        
                </ul>

                <label>
                    Title
                    <input
                        type="text"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Image Url
                    <input
                        type="text"
                        value={imageUrl}
                        required
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>

                <label>
                    Link
                    <input
                        type="text"
                        value={url}
                        required
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </label>
                            <button type="submit">Create new Pin!</button>
            </form>

        </div>
    );
}

export default CreatePinForm;
