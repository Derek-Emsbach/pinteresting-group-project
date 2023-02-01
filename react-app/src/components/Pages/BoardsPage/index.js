import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllBoardsThunk } from '../../../store/board';

function BoardsPage() {
	const dispatch = useDispatch();
	console.log('boards')

	// const allBoards = useSelector((state) => Object.values(state.boards))
	const boards = Object.values(useSelector((state) => state.board));

	console.log('allBoards', boards)

	useEffect(() => {
		dispatch(getAllBoardsThunk());
	}, [dispatch]);

	return (
		<>
		{boards &&(
			<div className="boards">
			<ul className="boardList">
				{boards.map((board) => {
					return (
						<li key={board.id} className="singleBoard">
						<h2>{board.title}</h2>
						</li>
					)
				}

				)}
			</ul>

			</div>
		)}
    	</>
	);
}

export default BoardsPage;
