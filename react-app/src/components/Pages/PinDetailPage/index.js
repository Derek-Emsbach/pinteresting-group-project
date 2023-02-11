import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteAPin } from "../../../store/pin";

function PinDetailPage() {
  const [pin, setPin] = useState([]);
  const { pinId } = useParams();
  const currentUser = useSelector((state) => state.session.user);
  const allPins = useSelector((state) => state.pin);
  const specificPin = allPins[pinId];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  const deletePin = (e) => {
    e.preventDefault();

    dispatch(deleteAPin(pinId));

    history.push(`/pins`);


  };
  useEffect(() => {
		if (!pinId) {
			return;
		}
		(async () => {
			const response = await fetch(`/api/pins/${pinId}`);
			const pin = await response.json();
			setPin(pin);
		})();


	}, [pinId]);

	if (!pin) {
		return null;
	}

    const pinUsers = users.filter((user)=>user.id ===pin.userId)



	return (
		<ul>
			<div>
            <div>
            <img src={pin.imageUrl}></img>
            </div>
				<h1>PIN DETAIL PAGE</h1>
				<li><strong>Created By: </strong> {pinUsers.map((user)=>user.username)}</li>

				<li><strong>Title: </strong> {pin.title}</li>

                <li><strong>Link: </strong>  <a href= {pin.url}>
                {pin.url}
                </a></li>

			</div>

            {currentUser?.id === specificPin.userId &&(
            <Link to={`/pins/${pin.id}/update`}>
            <button className='update_button' type="button">Update Form</button>
            <button className='delete_button' type="button" onClick={deletePin}>
            Delete Pin
          </button>


          </Link>
          )}
		</ul>
	);
}

export default PinDetailPage;
