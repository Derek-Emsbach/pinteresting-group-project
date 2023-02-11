import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PopOver from "../PopOver";
import "./PinsGrid.css";
import { addPinning, removePinning } from "../../store/pinning";

function PinsGrid({
  pins = [],
  boards = [],
  currentBoard,
  showRemove = false,
}) {
  const [saveTo, setSaveTo] = useState("");

  return (
    <div className="PinsGrid--Container">
      {pins.map((pin) => (
        <PinItem
          key={pin.id}
          boards={boards}
          saveTo={saveTo}
          setSaveTo={setSaveTo}
          currentBoard={currentBoard}
          showRemove={showRemove}
          {...pin}
        />
      ))}
    </div>
  );
}

export default PinsGrid;

function PinItem({
  id,
  imageUrl,
  boards,
  saveTo,
  setSaveTo,
  currentBoard,
  showRemove = false,
}) {
  const sessionUser = useSelector((state) => state.session.user);
  const [popOverOpen, setPopOverOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <NavLink to={`/pins/${id}`}>
      <div className="PinsGrid--Item">
        <img
          src={imageUrl}
          crossOrigin="anonymous"
          className="PinsGrid--Image"
        />
        <div className="PinsGrid--Actions">
          <PopOver
            open={popOverOpen}
            setOpen={setPopOverOpen}
            style={{
              top: "25px",
            }}
            button={
              <button
                className="PinsGrid--Action--Button"
                onClick={(event) => {
                  event.preventDefault();
                  setPopOverOpen(true);
                }}
              >
                ...
              </button>
            }
          >
            <div className="PinsGrid--Action--Content">
              {showRemove && currentBoard ? (
                <>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(removePinning(currentBoard, id));
                      setPopOverOpen(false);
                    }}
                  >
                    remove
                  </button>
                </>
              ) : (
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
                    {boards
                      .filter(({ userId }) => userId === sessionUser.id)
                      .map(({ id, title }) => (
                        <option key={id} selected={id === saveTo} value={id}>
                          {title}
                        </option>
                      ))}
                  </select>
                  <button
                    disabled={!saveTo}
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(addPinning(saveTo, id));
                      setPopOverOpen(false);
                    }}
                  >
                    confirm
                  </button>
                </>
              )}
            </div>
          </PopOver>
        </div>
      </div>
    </NavLink>
  );
}
