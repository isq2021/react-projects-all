import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const TABLE_HEADERS_NAMES = {
  firstName: "First Name",
  lastName: "Last Name",
  dateOfBirth: "D.O.B",
  placeOfBirth: "P.O.B",
  maritalStatus: "Marital Status",
  email: "Email",
};

export default function TableHeadComponent() {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>

          {Object.keys(TABLE_HEADERS_NAMES).map((key) => (
            <TableCell key={key}>{TABLE_HEADERS_NAMES[key]}</TableCell>
          ))}
          <TableCell />
        </TableRow>
      </TableHead>
    </>
  );
}
