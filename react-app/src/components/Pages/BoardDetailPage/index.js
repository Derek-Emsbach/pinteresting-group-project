import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Heading from "./Heading";
import PinsGrid from "./PinsGrid";
import Footing from "./Footing";
import { getAllBoardsThunk } from "../../../store/board";

function BoardDetailPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, []);

  return (
    <div className="BoardDetail--Page">
      <Heading />
      <PinsGrid />
      <Footing />
    </div>
  );
}

export default BoardDetailPage;
