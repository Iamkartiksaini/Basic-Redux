import { createStore, applyMiddleware } from "redux";
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

// Create the store with the reducer and the thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
