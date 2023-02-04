import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { editABoard } from '../../../store/board';

function EditBoardForm() {
	const dispatch = useDispatch();
	const { boardId } = useParams();
	const allBoards = useSelector((state) => state.board);
	const specificBoard = allBoards[boardId];

	const [title, setTitle] = useState(specificBoard.title);
	// const [imageUrl, setImageUrl] = useState(specificBoard.imageUrl);
	// const [url, setUrl] = useState(specificBoard.url);

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// setErrors([]);
		const payload = { title };
		let newBoard;
		// try{
		dispatch(editABoard(boardId, payload));
		history.push(`/boards/${specificBoard.id}`);
		//    }catch(err){
		//     const data = await err.json()
		//     setErrors([...Object.values(data.errors)])
		//    }
	};

	return (
		<div>
			<form className='edit-form' onSubmit={handleSubmit}>
				<h1 className='update'>Update your board!</h1>
				<ul>
					{/* {errors.map((error, idx) => (
          <li className='edit-errors' key={idx}>{error}</li>
        ))} */}

				</ul>

				<label>
					Title
					<input
						type='text'
						value={title}
						required
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>

				<button className='submit' type='submit'>
					Update Board
				</button>
			</form>
		</div>
	);
}

export default EditBoardForm;
