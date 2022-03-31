import React, { useContext, useState } from "react";
import { GeneralContext } from "../context/Context";
import * as actions from "../helpers/Actions";
import WithPagination from "./withPagination";

function Contacts({ partialContacts, setPageNow, arrayButtons }) {
  const { allContacts, dispatch } = useContext(GeneralContext);

  return (
    <>
      {partialContacts.map((item) => {
        return (
          <div>
            <li key={item.id}>name : {item.nameInput}</li>
            <li> phone : {item.phone}</li>
            <button
              onClick={() =>
                dispatch({ type: actions.DELETECONTACT, payload: item.id })
              }>
              delete
            </button>
          </div>
        );
      })}

      <div>
        {arrayButtons.map((page, index) => {
          return (
            <button key={page + index} onClick={() => setPageNow(index)}>
              {index + 1}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default WithPagination(Contacts, 4);
