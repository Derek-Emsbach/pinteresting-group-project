import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


function BoardDetailPage() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/boards/');
      const responseData = await response.json();
      console.log("***********JS BOARDS*********************")
      console.log(responseData)
      setBoards(responseData.boards);
    }
    fetchData();
  }, []);

  const boardComponents = boards.map((boards) => {
    return (
      <li key={boards.id}>

        <NavLink to={`/boards/${boards.id}`}>{boards.title}</NavLink>
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
