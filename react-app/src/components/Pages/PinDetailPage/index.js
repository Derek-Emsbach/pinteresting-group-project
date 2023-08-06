import React, { useEffect, useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteAPin, getSinglePin } from '../../../store/pin';
import './PinDetailPage.css';
import { getOneUserThunk } from '../../../store/user';

function PinDetailPage() {
	const { pinId } = useParams();

	const { pin, pinAuthor, currentUser } = useSelector((state) => {
		const pin = state.pin[pinId];
		const pinAuthor = state.otherUser[pin?.userId];
		const currentUser = state.session.user;

		return {
			pin,
			pinAuthor,
			currentUser,
		};
	});

	const dispatch = useDispatch();
	const history = useHistory();

	const deletePin = (e) => {
		e.preventDefault();

		dispatch(deleteAPin(pinId));

		history.push(`/pins`);
	};

	useEffect(() => {
		dispatch(getSinglePin(pinId));
	}, []);

	useEffect(() => {
		if (pin?.userId && !pinAuthor) {
			dispatch(getOneUserThunk(pin.userId));
		}
	}, [pin, pinAuthor]);

	if (!currentUser) {
		return <Redirect to='/login' />;
	}

	if (!pinId) {
		return <Redirect to='/404' />;
	}

	if (!pin || !pinAuthor) {
		return null;
	}

	return (
		<ul className='PinDetail--Page'>
			<div className='Pin-Detail'>
				<h1 className='pin-title'>Pin Detail Page</h1>
				<div className='PinDetail--Image--Container'>
					<img
						className='PinDetail--Image'
						src={pin.imageUrl}
						alt=''
					></img>
				</div>

				<div className='details'>
					<li className='pin-detail-list'>
						<strong>Title: </strong> {pin?.title}
					</li>

					<li className='pin-detail-list'>
						<strong>Author: </strong>{' '}
						<NavLink to={`/users/${pinAuthor.id}`}>
							{pinAuthor.username}
						</NavLink>
					</li>

					{!!pin.url && (
						<li className='pin-detail-list'>
							<strong>Link: </strong>{' '}
							<a href={pin?.url}> Click Here </a>
						</li>
					)}
				</div>
        <div className='button-container'>
				{currentUser.id === pinAuthor.id && (
					<Link to={`/pins/${pin.id}/update`}>
						<button className='regular-button' type='button'>
							Update Pin
						</button>
						<button
							className='create-button'
							type='button'
							onClick={deletePin}
						>
							Delete Pin
						</button>
					</Link>
				)}
        </div>
			</div>
		</ul>
	);
}

export default PinDetailPage;
