import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Heading from "./Heading";
import PinsGrid from "../../PinsGrid";
import Footing from "./Footing";
import { getAllBoardsThunk } from "../../../store/board";

function BoardDetailPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, []);

  const { boardId } = useParams();
  const { pins = [] } = useSelector((state) => state.board[boardId]) || {};

  return (
    <div className="BoardDetail--Page">
      <Heading />
      <PinsGrid pins={pins} />
      <Footing />
    </div>
  );
}

export default BoardDetailPage;
