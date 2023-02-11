import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPins } from "../../store/pin";
import { getAllBoardsThunk } from "../../store/board";
import { useDispatch } from "react-redux";
import PinsGrid from "../PinsGrid";

// using the common "PinsGrid" component that can be re-used in all other pages
// import "./PinterestLayout.css";

function PinterestLayout() {
  const pins = useSelector((state) => Object.values(state.pin));
  const boards = useSelector((state) => Object.values(state.board));
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPins());
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  return <div>{sessionUser && <PinsGrid pins={pins} boards={boards} />}</div>;
}

export default PinterestLayout;
