import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBoardsThunk } from '../../../store/board';
import './BoardsPage.css';

function BoardsPage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.session.user);

	const boards = useSelector((state) => Object.values(state.board));
	// console.log(boards, "BOARDS");
	useEffect(() => {
		dispatch(getAllBoardsThunk());
	}, [dispatch]);

	const CreateBoardForm = async (e) => {
		history.push('/boardform');
	};

	return (
		<>
			{boards && (
				<div className='all-boards-container'>
					<div>
						<div className='my-boards-create-boards-container'>
							<h1>My Boards</h1>
							<button className='create-button' onClick={CreateBoardForm}>Create Board</button>
						</div>
						{/* <h2>{boards.title}</h2> */}
						<div className='board-containers'>
						{boards.map((board) => (
							<div className='pin-items' key={board.id}>
									{currentUser?.id === board.userId && (
										<NavLink
											to={`/boards/${board.id}`}
											activeClassName='active'
										>
											<strong>Title:</strong> {board.title}
										</NavLink>
									)}

								{currentUser?.id === board.userId && (
									<NavLink
										to={`/boards/${board.id}`}
										activeClassName='active'
									>
										<img
											className='pin-detail'
											src={board.imageUrl}
										></img>
									</NavLink>
								)}
							</div>
						))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default BoardsPage;
