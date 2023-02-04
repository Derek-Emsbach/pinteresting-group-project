import React, { useEffect, useState } from 'react';
import EditorInput from './EditorInput';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editBoardThunk } from '../../../store/board';
import './Editor.css';

function BoardDetailEditor({ setOpen }) {
	const { boardId } = useParams();
	console.log('****** EDITOR PAGE ******** BOARD ID', boardId);
	const board = useSelector((state) => state.board[boardId]);
	console.log('*****EDITOR PAGE BOARD ID********', board);
	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [imageUrl, setimageUrl] = useState('');
	const [pending, setPending] = useState(false);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		setTitle(board.title);
		// setimageUrl(board.imageUrl);
	}, [board]);

	return (
		<div className='BoardDetail--Editor--Container'>
			<div className='BoardDetail--Editor--Backdrop'>
				<div className='BoardDetail--Editor--Card'>
					<button onClick={() => setOpen(false)} disabled={pending}>
						x
					</button>
					<form
						onSubmit={(event) => {
							event.preventDefault();

							setPending(true);

							dispatch(
								editBoardThunk({
									title,
                  // imageUrl,
								})
							)
								.then((res) => {
									if (res) {
										setOpen(false);
									} else {
										throw new Error('No response???');
									}
								})
								.catch((reason) => {
									if (!reason?.data?.errors?.length) {
										setErrors([
											'Hmmm, something went wrong. Please try again later.',
										]);
									}
								})
								.finally(() => {
									setPending(false);
								});
						}}
					>
						<EditorInput
							name='Title'
							value={title}
							setValue={setTitle}
							disabled={pending}
						/>
						{/* <EditorInput
							name='Description'
							type='textarea'
							rows={6}
							value={description}
							setValue={setDescription}
							disabled={pending}
						/> */}
						<button type='submit' disabled={pending}>
							Save
						</button>
					</form>
					<ul>
						{errors.map((message, i) => (
							<li key={i}>{message}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default BoardDetailEditor;
