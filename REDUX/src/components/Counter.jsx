import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../Store/Actions/Action";

function Counter() {
  const { counter } = useSelector((state) => state.counterReducer);
  console.log(counter);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: actions.INCREASE });
  };

  return (
    <>
      counter:{counter}
      <button onClick={() => handleClick()}>add</button>
    </>
  );
}

export default Counter;
