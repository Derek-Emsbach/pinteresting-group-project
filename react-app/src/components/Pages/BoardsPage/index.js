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


	// const CreateBoardForm = async(e)=>{
	//     history.push('/boardform')

	// }

	return (
		<>
			<div>
				<div>
					<h1>ALL BOARDS</h1>
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
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default BoardsPage;
