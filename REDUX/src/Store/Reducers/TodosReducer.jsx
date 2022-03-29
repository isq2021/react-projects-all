import * as actions from "../Actions/Action";
import { v4 as uuidv4 } from "uuid";

const todosReducer = (state = [], action) => {
  console.log(state, "state on delete");
  switch (action.type) {
    case actions.ADDTODO:
      const newTask = {
        id: uuidv4(),
        todo: action.payload,
      };

      return [...state, newTask];
    case actions.DELETETODO:
      console.log(action.payload, "action on delete");

      return state.filter((element) => element.id !== action.payload.id);

    default:
      return state;
  }
};
export default todosReducer;
