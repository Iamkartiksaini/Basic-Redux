import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// Define the initial state of the store
const initialState = {
  counter: 0,
};

// Define a reducer that handles actions and updates the state
const reducer = (state = initialState, action) => {
  console.log("First");
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
const todoListReducer = (state = [], action) => {
  console.log("second");

  const { type, isCompleted, text, heading, updateItem, removeThis } = action;
  let todoItem = {
    isCompleted,
    text,
    heading,
  };
  switch (type) {
    case "addTodoItem":
      return [...state, todoItem];
    case "deleteItem":
      let popOut = [...state];
      popOut.splice(removeThis, 1);
      return popOut;
    case "editItem":
      let updateThis = [...state];
      console.log("whole state", updateThis);
      if (action.hint == "checkbox") {
        updateThis[updateItem].isCompleted = !isCompleted;
      }
      if (action.hint == "textUpdate") {
        updateThis[updateItem].heading = heading;
        updateThis[updateItem].text = text;
        updateThis[updateItem].isCompleted = false;
      }
      return updateThis;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: reducer,
  todoList: todoListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// Create the store with the reducer and the thunk middleware

export default store;
