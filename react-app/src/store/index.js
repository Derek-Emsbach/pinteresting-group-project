import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import boardReducer from "./board";
import pinsReducer from "./pin";
import userReducer from "./user";
import searchbarReducer from "./searchbar";
// import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  session: sessionReducer,
  board: boardReducer,
  pin: pinsReducer,
  otherUser: userReducer,
  searchbar: searchbarReducer,
});
// const rootReducer = (state, action) => {
//   if (action.type === 'session/REMOVE_USER') {
//       // for all keys defined in your persistConfig(s)
//       storage.removeItem('persist:root')
//       // storage.removeItem('persist:otherKey')

//       return appReducer(undefined, action);
//   }
//   return appReducer(state, action);
// };
let enhancer;

// pre-fixed code

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
