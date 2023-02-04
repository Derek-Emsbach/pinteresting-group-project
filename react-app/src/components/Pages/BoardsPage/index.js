import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllBoardsThunk } from "../../../store/board";

function BoardsPage() {
	const history = useHistory();
	const dispatch = useDispatch();

	const boards = useSelector((state) => Object.values(state.board));
	// console.log(boards, "BOARDS");
	useEffect(() => {
		dispatch(getAllBoardsThunk());
	}, [dispatch]);


	return (
		<>
			{boards && (


			<div>
				<div>
					<div>
						<h1>ALL BOARDS</h1>
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
						<div key={board.id}>
							<h4>
								<NavLink
									to={`/boards/${board.id}`}
									activeClassName="active"
								>
									{board.title}
								</NavLink>
							</h4>
							<NavLink
									to={`/boards/${board.id}`}
									activeClassName="active"
								>
									<img src={board.imageUrl}></img>

							</NavLink>

						</div>

					))}
				</div>
			</div>
			)}
		</>
	);
}

export default BoardsPage;
