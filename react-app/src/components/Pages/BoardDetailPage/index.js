import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Heading from "./Heading";
import GridLayout from "../../GridLayout";
import Footing from "./Footing";
import { getAllBoardsThunk } from "../../../store/board";
import { removePinning } from "../../../store/pinning";

function BoardDetailPage() {
  const { boardId } = useParams();
  const currentUser = useSelector((state) => state.session.user);
  const { userId: boardAuthorId, pins = [] } =
    useSelector((state) => state.board[boardId]) || {};
  const dispatch = useDispatch();
  const history = useHistory();

  const navigateToPinPage = (pin) => {
    history.push(`/pins/${pin.id}`);
  };

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, []);

  return (
    <div className="BoardDetail--Page">
      <Heading />
      <GridLayout
        items={pins}
        buttonLabel="remove"
        onItemClick={navigateToPinPage}
        renderItemActions={
          currentUser.id === boardAuthorId &&
          ((pin, closeActionPopOver) => (
            <button
              className="create-button"
              onClick={() => {
                dispatch(removePinning(boardId, pin.id));
                closeActionPopOver();
              }}
            >
              Are you sure?
            </button>
          ))
        }
      />
      <Footing />
    </div>
  );
}

export default BoardDetailPage;
