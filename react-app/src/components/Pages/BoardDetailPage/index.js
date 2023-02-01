import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllBoardsThunk } from '../../../store/board';

function BoardDetailPage() {
	const [board, setBoard] = useState([]);
	const { boardId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllBoardsThunk());
	}, [dispatch]);

	useEffect(() => {
		if (!boardId) {
			return;
		}
		(async () => {
			// const response = await fetch(`/api/boards/${boardId}`);
			const response = await fetch(`/api/boards`);
			const board = await response.json();
			setBoard(board);
		})();
	}, [boardId]);

	if (!board) {
		return null;
	}

	return (
		<ul>
			<div>
				<h1>BOARD DETAIL PAGE</h1>
				<li>
					<strong>User Id: </strong> {boardId}
				</li>
				<li>
					<strong>Title: </strong> {board.title}
				</li>
				<li>
					<strong>Image Url: </strong> {board.imageUrl}
				</li>
			</div>
		</ul>
	);
}

export default BoardDetailPage;
