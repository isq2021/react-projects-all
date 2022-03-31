import React, { useState, useContext } from "react";
import { GeneralContext } from "../context/Context";
import * as actions from "../helpers/Actions";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [nameInput, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const { allContacts, dispatch } = useContext(GeneralContext);

  return (
    <>
      <div>
        <input
          value={nameInput}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="phone"
        />
        <button
          onClick={() =>
            dispatch({
              type: actions.ADDCONTACT,
              payload: { nameInput: nameInput, phone: phone, id: uuidv4() },
            })
          }>
          Add contact
        </button>
      </div>
    </>
  );
}

export default Form;
