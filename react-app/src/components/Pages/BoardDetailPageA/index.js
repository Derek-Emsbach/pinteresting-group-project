import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteABoard } from '../../../store/board';

function BoardDetailPage() {
	const [board, setBoard] = useState([]);
  const {boardId} = useParams();
const dispatch= useDispatch()
const history= useHistory()

  const deleteBoard = (e) => {
    e.preventDefault();

    dispatch(deleteABoard(boardId));

    history.push(`/boards`);


  };
  useEffect(() => {
		if (!boardId) {
			return;
		}
		(async () => {
			const response = await fetch(`/api/boards/${boardId}`);
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
            {/* <div>
            <img src={board.imageUrl}></img>
            </div> */}
				<h1>BOARD DETAIL PAGE</h1>
				<li><strong>Board Id: </strong> {boardId}</li>
				<li><strong>Title: </strong> {board.title}</li>

                {/* <li><strong>Link: </strong>  <a href= {board.url}>
                {board.url}
                </a></li> */}

			</div>
            <Link to={`/boards/${board.id}/update`}>
            <button className='update_button' type="button">Update Form</button>
            <button className='delete_button' type="button" onClick={deleteBoard}>
            Delete Board
          </button>

          </Link>
		</ul>
	);
}

export default BoardDetailPage;
