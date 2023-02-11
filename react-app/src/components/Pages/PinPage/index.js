import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPins } from '../../../store/pin';
import PinsGrid from '../../PinsGrid';
function PinPage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const pins = useSelector((state) => Object.values(state.pin));
	const currentUser = useSelector((state) => state.session.user);

	useEffect(() => {
		dispatch(getAllPins());
	}, [dispatch]);

	const CreatePinForm = async (e) => {
		history.push('/pinform');
	};

	return (
		<div>
			<div>
				<h1>PINS I'VE CREATED</h1>
				<button className='create-button' onClick={CreatePinForm}>
					Create Pin
				</button>
				<PinsGrid pins={pins}/>
                {/* <div className='board-containers'>
				{pins.map((pin) => (
					<div className='pin-items' key={pin.id}>
						{currentUser?.id === pin.userId && (
							<NavLink
								to={`/pins/${pin.id}`}
								activeClassName='active'
							>
								<strong>Title:</strong> {pin.title}
							</NavLink>
						)}

						{currentUser?.id === pin.userId && (
							<NavLink to={`/pins/${pin.id}`}>
								<img
									className='pin-detail'
									src={pin.imageUrl}
								></img>
							</NavLink>
						)}

						{currentUser?.id === pin.userId && (
							<div>
								<strong>Link:</strong>
								<a classname='link' href={pin.url}>
									{' '}
									Click Here{' '}
								</a>
							</div>
						)}
					</div>

				))}
                </div> */}
			</div>
		</div>
	);
}

export default PinPage;
