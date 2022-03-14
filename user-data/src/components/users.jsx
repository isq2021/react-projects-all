import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Checkbox } from "@mui/material";
import User from "./user";

const TABLE_HEADERS_NAMES = {
  firstName: "First Name",
  lastName: "Last Name",
  dateOfBirth: "D.O.B",
  placeOfBirth: "P.O.B",
  maritalStatus: "Marital Status",
};

export default function users({ users }) {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
        }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                {Object.keys(TABLE_HEADERS_NAMES).map((key) => (
                  <TableCell key={key}>{TABLE_HEADERS_NAMES[key]}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <User users={users} />
                {users?.map((user) => {
                  return <p key={user?._id}>{user?.email}</p>;
                })}
              </TableRow>
            </TableBody>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
}
