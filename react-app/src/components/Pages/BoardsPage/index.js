import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllBoardsThunk } from "../../../store/board";
import './BoardsPage.css'

function BoardsPage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.session.user)

	const boards = useSelector((state) => Object.values(state.board));
	// console.log(boards, "BOARDS");
	useEffect(() => {
		dispatch(getAllBoardsThunk());
	}, [dispatch]);


	return (
		<>
			{boards && (


			<div className="all-boards-container">
				<div>
					<div className="my-boards-create-boards-container">
						<h1>My Boards</h1>
						<NavLink
							to="/boardform"
							exact={true}
							activeClassName="active"
						>
							Create Board
						</NavLink>
					</div>
					{/* <h2>{boards.title}</h2> */}
					{boards.map((board) => (
						<div key={board.id} className='board-containers'>
							<h4>
								{currentUser?.id === board.userId && (
									<NavLink
										to={`/boards/${board.id}`}
										activeClassName="active"
									>
										{board.title}
									</NavLink>
								)}
							</h4>
							{currentUser?.id === board.userId && (
								<NavLink
										to={`/boards/${board.id}`}
										activeClassName="active"
									>
										<img className="board-image" src={board.imageUrl}></img>

								</NavLink>
							)}
						</div>

					))}
				</div>
			</div>
			)}
		</>
	);
}

export default BoardsPage;
