import { Button, Checkbox, TableCell, TableRow } from "@mui/material";
import React from "react";
import { Edit } from "@material-ui/icons";
import dateFormat from "dateformat";

export default function User({ user, handleEdit, open }) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox />
      </TableCell>
      <TableCell>{user?.firstName}</TableCell>
      <TableCell>{user?.lastName}</TableCell>
      <TableCell>{dateFormat(user?.dateOfBirth, "mmm d, yyyy")}</TableCell>
      <TableCell>{user?.placeOfBirth}</TableCell>
      <TableCell>{user?.maritalStatus}</TableCell>
      <TableCell>{user?.email}</TableCell>
      <TableCell>
        <Button onClick={(event) => handleEdit(event, user?._id)}>
          <Edit />
        </Button>
      </TableCell>
    </TableRow>
  );
}
