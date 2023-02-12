import React, { useEffect, useState } from 'react';
import './HomePage.css';
import icon from '../../../icons/Pinterest-Logo-PNG9.png';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignupFormModal from '../../SignUpFormModal';
import Modal from '../../Modal/Modal';
import LoginModal from '../../Modal/LoginModal';
import { login } from '../../../store/session';
import DemoButton from '../../DemoButton/DemoButton';
import * as sessionActions from '../../../store/session';
function HomePage() {
	const dispatch = useDispatch();
	const history = useHistory();
	const sessionUser = useSelector((state) => state.session.user);
	const [modalOpen, setModalOpen] = useState(false);
	const [loginModalOpen, setLoginModalOpen] = useState(false);

	const demo = async (e) => {
		e.preventDefault();
		const user = {
			email: 'demo@aa.io',
			password: 'password',
		};
		dispatch(login(user.email, user.password));
	};

	return (
		<>
			{!sessionUser && (
				<div className='Splash'>
					<div className='nav_bar'>
						<div className='icon'>
							<img src={icon} alt=''></img>
						</div>

						<div className='right_menu'>
							<button className='signup-button' onClick={demo}>
								Demo User
							</button>

							<button
								className='login-button'
								onClick={() => {
									setLoginModalOpen(true);
								}}
							>
								{' '}
								Login{' '}
							</button>
							{loginModalOpen && (
								<LoginModal
									setLoginModalOpen={setLoginModalOpen}
								/>
							)}

							<button
								className='signup-button'
								onClick={() => {
									setModalOpen(true);
								}}
							>
								{' '}
								Sign Up{' '}
							</button>
							{modalOpen && <Modal setOpenModal={setModalOpen} />}
						</div>
					</div>
					<img src='https://cdn.taggbox.com/v7/taggbox.com/blog/wp-content/uploads/2020/12/Pinterest-1.png' />
				</div>
			)}
		</>
	);
}

export default HomePage;
