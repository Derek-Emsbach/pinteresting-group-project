import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPins } from "../../store/pin";
import { getAllBoardsThunk, selectMyBoards } from "../../store/board";
import { useDispatch } from "react-redux";
import GridLayout from "../GridLayout";
import { useHistory } from "react-router-dom";
import { addPinning } from "../../store/pinning";

function PinterestLayout() {
  const pins = useSelector((state) => Object.values(state.pin));
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const navigateToPinPage = (pin) => {
    history.push(`/pins/${pin.id}`);
  };

  useEffect(() => {
    dispatch(getAllPins());
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  return (
    <div>
      {sessionUser && (
        <GridLayout
          items={pins}
          onItemClick={navigateToPinPage}
          renderItemActions={(pin, closeActionPopOver) => (
            <>
              <AddPinningControls
                pin={pin}
                onPinningDone={closeActionPopOver}
              />
            </>
          )}
        />
      )}
    </div>
  );
}

export default PinterestLayout;

export function AddPinningControls({ pin, onPinningDone }) {
  const [saveTo, setSaveTo] = useState("");
  const dispatch = useDispatch();
  const myBoards = useSelector(selectMyBoards);

  return (
    <>
      <select
        style={{
          width: "180px",
        }}
        onChange={(event) => {
          setSaveTo(event.target.value);
        }}
      >
        {!saveTo && <option value="">choose a board</option>}
        {myBoards.map((board) => (
          <option
            key={board.id}
            selected={board.id === saveTo}
            value={board.id}
          >
            {board.title}
          </option>
        ))}
      </select>
      <button
        className="create-button"
        disabled={!saveTo}
        onClick={() => {
          dispatch(addPinning(saveTo, pin.id));
          onPinningDone();
        }}
      >
        confirm
      </button>
    </>
  );
}
