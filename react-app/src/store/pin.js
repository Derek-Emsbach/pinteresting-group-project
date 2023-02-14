import { FULL_RESET } from "./full-reset";

const LOAD_MANY_PINS = "pin/LOAD_MANY_PINS";

const LOAD_ONE_PIN = "pin/LOAD_ONE_PIN";

const REMOVE_PIN = "pin/REMOVE_PIN";

const loadPins = (pins) => {
  return {
    type: LOAD_MANY_PINS,
    pins,
  };
};

const loadOnePin = (pins) => {
  return {
    type: LOAD_ONE_PIN,
    pins,
  };
};

const removePin = (pinId) => {
  return {
    type: REMOVE_PIN,
    pinId,
  };
};

export const getAllPins = () => async (dispatch) => {
  const response = await fetch("/api/pins/");

  if (response.ok) {
    const list = await response.json();
    dispatch(loadPins(list));
  }
};

export const getAllPinsByAUser = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/pins`);

  if (response.ok) {
    const list = await response.json();
    dispatch(loadPins(list));
  }
};

export const getSinglePin = (pinId) => async (dispatch) => {
  const response = await fetch(`/api/pins/${pinId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadOnePin(data));
    return data;
  }
};

export const addAPin = (pins) => async (dispatch) => {
  const response = await fetch("/api/pins/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pins),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(loadOnePin(data));
    return data;
  } else {
    const error = await response.json();
    return error;
  }
};

export const editAPin = (id, pinData) => async (dispatch) => {
  const response = await fetch(`/api/pins/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pinData),
  });
  if (response.ok) {
    const pinData = await response.json();
    dispatch(loadOnePin(pinData));
    return pinData;
  } else {
    const error = await response.json();
    return error;
  }
};

export const deleteAPin = (pinId) => async (dispatch) => {
  const response = await fetch(`/api/pins/${pinId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    dispatch(removePin(pinId));
  }
};
const initialPins = {};

const pinsReducer = (state = initialPins, action) => {
  let copy = { ...state };
  switch (action.type) {
    case FULL_RESET:
      return { ...initialPins };

    case LOAD_MANY_PINS:
      action.pins.forEach((pin) => {
        copy[pin.id] = pin;
      });
      return copy;

    case LOAD_ONE_PIN:
      copy[action.pins.id] = action.pins;
      return copy;

    case REMOVE_PIN:
      delete copy[action.pinId];

      return copy;

    default:
      return state;
  }
};

export default pinsReducer;

export function selectMyPins(state) {
  const currentUser = state.session.user;

  if (!currentUser) {
    return [];
  }

  return Object.values(state.pin).filter(
    ({ userId: pinAuthorId }) => pinAuthorId === currentUser.id
  );
}
