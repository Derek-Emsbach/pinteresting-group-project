import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function BoardDetailPage() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/boards/');
      const responseData = await response.json();
      console.log("***********JS BOARDS*********************")
      setBoards(responseData.boards);
    }
    fetchData();
  }, []);

  const boardComponents = boards.map((board) => {
    return (
      <li key={board.id}>

        <NavLink to={`/boards/${board.id}`}>{board.title}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>Board List: </h1>
      <div>{boardComponents}</div>
    </>
  );
}

export default BoardDetailPage;
