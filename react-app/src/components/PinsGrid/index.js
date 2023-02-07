import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PopOver from "../PopOver";
import "./PinsGrid.css";

function BoardDetailPinGrid({ pins = [], boards = [] }) {
  const [saveTo, setSaveTo] = useState("");

  return (
    <div className="PinsGrid--Container">
      {pins.map((pin) => (
        <PinItem
          key={pin.id}
          boards={boards}
          saveTo={saveTo}
          setSaveTo={setSaveTo}
          {...pin}
        />
      ))}
    </div>
  );
}

export default BoardDetailPinGrid;

function PinItem({ id, imageUrl, boards, saveTo, setSaveTo }) {
  const [popOverOpen, setPopOverOpen] = useState(false);

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
                Save
              </button>
            }
          >
            <div className="PinsGrid--Action--Save">
              <select
                onChange={(event) => {
                  setSaveTo(event.target.value);
                }}
              >
                {!saveTo && <option value="">choose a board</option>}
                {boards.map(({ id, title }) => (
                  <option key={id} selected={id === saveTo} value={id}>
                    {title}
                  </option>
                ))}
              </select>
              <button
                disabled={!saveTo}
                onClick={(event) => {
                  event.preventDefault();
                  console.log("@@@");
                  setPopOverOpen(false);
                }}
              >
                confirm
              </button>
            </div>
          </PopOver>
        </div>
      </div>
    </NavLink>
  );
}
