import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { getAllPins } from "../../store/pin";
import { getAllBoardsThunk, selectMyBoards } from "../../store/board";
import { useDispatch } from "react-redux";
import GridLayout from "../GridLayout";
import { useHistory } from "react-router-dom";
import { addPinning } from "../../store/pinning";
import { selectSearchbarValue } from "../../store/searchbar";

const MAX_PIN_COUNT = 120;

function getLimitedPinsList(pins, searchbarValue = "") {
  return pins
    .filter((pin) =>
      pin.title.toLowerCase().includes(searchbarValue.toLowerCase())
    )
    .slice(0, MAX_PIN_COUNT);
}

function PinterestLayout() {
  const sessionUser = useSelector((state) => state.session.user);
  const { searchbarValue, allPins } = useSelector((state) => {
    const searchbarValue = selectSearchbarValue(state);
    const allPins = Object.values(state.pin);

    return { searchbarValue, allPins };
  });

  const [pins, setPins] = useState([]);
  const [hasRenderedPins, setHasRenderedPins] = useState(false);
  const lastSearchRef = useRef(searchbarValue);

  const dispatch = useDispatch();
  const history = useHistory();

  const navigateToPinPage = (pin) => {
    history.push(`/pins/${pin.id}`);
  };

  useEffect(() => {
    if (!hasRenderedPins && allPins.length) {
      setHasRenderedPins(true);
      setPins(getLimitedPinsList(allPins));
    }
  }, [hasRenderedPins, allPins]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lastSearchRef.current !== searchbarValue) {
        lastSearchRef.current = searchbarValue;
        setPins(getLimitedPinsList(allPins, searchbarValue));
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [allPins, searchbarValue]);

  useEffect(() => {
    dispatch(getAllPins());
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  return (
    <div>
      <GridLayout
        items={pins}
        onItemClick={!!sessionUser && navigateToPinPage}
        renderItemActions={
          !!sessionUser &&
          ((pin, closeActionPopOver) => (
            <>
              <AddPinningControls
                pin={pin}
                onPinningDone={closeActionPopOver}
              />
            </>
          ))
        }
      />
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
