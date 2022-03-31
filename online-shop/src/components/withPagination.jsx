import { useContext, useState } from "react";
import { GeneralContext } from "../context/Context";

const WithPagination = (Component, numberofel) => {
  return function WithPagination() {
    const { allContacts } = useContext(GeneralContext);
    const elementsPerPage = numberofel;
    const pageNumber = Math.ceil(allContacts.length / elementsPerPage);
    const arrayButtons = new Array(pageNumber).fill("buttonPage");
    const [pageNow, setPageNow] = useState(0);
    const start = pageNow * elementsPerPage;
    const end = pageNow * elementsPerPage + elementsPerPage;
    const partialContacts = allContacts.slice(start, end);
    return (
      <Component
        partialContacts={partialContacts}
        setPageNow={setPageNow}
        arrayButtons={arrayButtons}
      />
    );
  };
};
export default WithPagination;
