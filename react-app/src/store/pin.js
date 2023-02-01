const GET_ALL_PINS = "/spots/GET_ALL_PINS";

const ADD_PIN = "/spots/ADD_PIN";

const REMOVE_PIN='/spots/REMOVE_PIN'

const loadPins = (pins) => {
  return {
    type: GET_ALL_PINS,
    payload: pins,
  };
};

const addingPin = (pins) => {
  return {
    type: ADD_PIN,
    pins,
  };
};

const removePin =(pinId)=>{
  return{
    type: REMOVE_PIN,
    pinId
  }
}

export const getAllPins = () => async (dispatch) => {
  const response = await fetch("/api/pins");

  if (response.ok) {
    const list = await response.json();
    dispatch(loadPins(list));
 
  }
};

export const getSingleSpot = (pinId) => async (dispatch) => {
  const response = await fetch(`/api/pins/${pinId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(addingPin(data));
    return data;
  }
};

export const addAPin = (pins) => async (dispatch) => {
  const response = await fetch("/api/pins",{
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(pins)
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(addingPin(data));
   return data
  }
};

export const editAPin=(id,pinData) =>async(dispatch)=>{
  const response = await fetch(`/api/pins/${id}`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(pinData)

  })
if(response.ok){
  const pinData= await response.json()
  dispatch(addingPin(pinData))
  return pinData
}

}

export const deleteAPin = (pinId) => async (dispatch) => {
  const response = await fetch(`/api/pins/${pinId}`,{
    method: 'DELETE',
    headers:{
      'Content-Type':'application/json'
    }
  });

  if (response.ok) {
   
    dispatch(removePin(pinId));
  
  }
};
const initialPins = {};

const pinsReducer = (state = initialPins, action) => {
  let copy = { ...state };
  switch (action.type) {
    case GET_ALL_PINS: 
    
      return {...copy, ...action.payload};

    case ADD_PIN: 
      copy[action.pins.id] = action.pins;
    return copy

    case REMOVE_PIN:

    delete copy[action.pinId] 

   
  return copy

    default:
      return state;
  }
};

export default pinsReducer;