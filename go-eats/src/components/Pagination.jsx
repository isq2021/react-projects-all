import React, { useContext } from "react";
import { GeneralContext } from "../Context/GeneralContext";

function Pagination() {
  const { numberOfPages, setNumberOfPagesNow } = useContext(GeneralContext);
  const pages = new Array(numberOfPages).fill("page");
  return (
    <>
      <div>
        {pages.map((page, index) => {
          return (
            <button
              key={`${page}${index}`}
              onClick={(e) => setNumberOfPagesNow(index)}>
              {index + 1}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Pagination;
