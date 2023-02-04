import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PinsGrid.css";

function BoardDetailPinGrid() {
  const { boardId } = useParams();
  const board = useSelector((state) => state.board[boardId]);

  const [fakePins, setFakePins] = useState([]);

  useEffect(() => {
    if (!fakePins.length) {
      fetch("https://picsum.photos/v2/list?page=2&limit=32")
        .then((res) => res.json())
        .then((data) => setFakePins(data));
    }
  }, []);

  if (!board) {
    return null;
  }

  const { pins = fakePins } = board;

  console.log(pins);

  return (
    <div className="PinsGrid--Container">
      {fakePins.map(({ id, download_url }) => (
        <div key={id} className="PinsGrid--Item">
          <img crossOrigin="anonymous" src={download_url} />
        </div>
      ))}
    </div>
  );
}

export default BoardDetailPinGrid;
