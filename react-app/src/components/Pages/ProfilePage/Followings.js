import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFollowingThunk } from '../../../store/following_follower';
import './Profile.css';
import './Following.css';
import profile from '../../../icons/profile.png';
import { useHistory } from 'react-router-dom';

function Followings() {
	const [modalOpen, setModalOpen] = useState(false);
	const sessionUser = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const history = useHistory();

	const allMyFollowings = useSelector((state) =>
		Object.values(state.following)
	);

	if (modalOpen === true) {
		return (
			<>
				{allMyFollowings && (
					<div className='modalBackground'>
						<div className='modalContainer'>
							<div className='titleCloseBtn'>
								<button
									onClick={() => {
										setModalOpen(false);
									}}
								>
									X
								</button>
							</div>

							{allMyFollowings.map((following) => {
								return (
									<button
										onClick={() =>
											history.push(
												`/users/${following.id}`
											)
										}
										className='following_container'
									>
										<div className='following_profile'>
											<img src={following.image} />
										</div>
										<div className='following_info'>
											<h3>
												{' '}
												{following.firstName}{' '}
												{following.lastName}
											</h3>
											<h4>{following.username}</h4>
										</div>
									</button>
								);
							})}
						</div>
					</div>
				)}
			</>
		);
	}

	return (
		<div>
			<button
				className='openModalBtn'
				onClick={() => {
					setModalOpen(true);
				}}
			>
				Following
			</button>
		</div>
	);
}

export default Followings;
