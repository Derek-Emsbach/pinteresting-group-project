import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBoards } from '../../../store/board';
import { Link } from 'react-router-dom';
function BoardPage() {
	const history = useHistory();
	const dispatch = useDispatch();


    const boards = useSelector((state)=> Object.values(state.board))
console.log(boards)
    useEffect(()=>{
        dispatch(getAllBoards())
    },[dispatch])


    const CreateBoardForm = async(e)=>{
        history.push('/boardform')

    }

    return(

        <div>
        <div>
            <h1>ALL BOARDS</h1>
          {boards.map((board)=>(
            <div key={board.id}>
            <h4>
            <NavLink to={`/boards/${board.id}`} activeClassName='active'>
            {board.title}
            </NavLink>

            <NavLink to={`/boards/${board.id}`}>
            {/* <img src={board.imageUrl}></img> */}
            </NavLink>
            </h4>
            <li>
            {/* <a href= {board.url}> */}
            {/* {board.url} */}
            {/* </a> */}
            </li>
            </div>
          ))}
        </div>
        <button onClick={CreateBoardForm}>Create Boards</button>
    </div>


    )
}

export default BoardPage;
