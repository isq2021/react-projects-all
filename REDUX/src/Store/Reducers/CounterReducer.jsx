import * as actions from "../Actions/Action";
const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREASE:
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};
export default counterReducer;
