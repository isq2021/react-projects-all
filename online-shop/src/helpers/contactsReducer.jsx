import * as actions from "./Actions";
const contactsReducer = (state, action) => {
  switch (action.type) {
    case actions.ADDCONTACT:
      return [...state, action.payload];
    case actions.DELETECONTACT:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
export default contactsReducer;
