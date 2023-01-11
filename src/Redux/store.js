import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// Define the initial state of the store
const initialState = {
  counter: 0,
};

// Define a reducer that handles actions and updates the state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, counter: state.counter + 2 };
    case "minus":
      return { ...state, counter: state.counter - 2 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: reducer,
  todos: reducer2,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// Create the store with the reducer and the thunk middleware

export default store;
