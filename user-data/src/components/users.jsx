import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import {
  Box,
  Button,
  Paper,
  TableContainer,
  TablePagination,
} from "@mui/material";

import User from "./User";
import TableHeadComponent from "./TableHeadComponent";
import UserForm from "./UserForm";

export default function Users({ users }) {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [page, setPage] = useState(0);
  const [countPerPage, setCountPerPage] = useState(5);

  const [selectedUsers, setSelectedUsersList] = useState([]);

  const handleEditClick = (event, userId) => {
    setOpen(true);
    setModalType("edit");
    setSelectedUser(userId);
  };

  const closeModal = () => {
    setOpen(false);
    setModalType(null);
    setSelectedUser(null);
  };

  const handleCreateClick = () => {
    setOpen(true);
    setModalType("create");
  };

  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  const handlePageRowsCountChange = (event) => {
    setCountPerPage(event?.target?.value);
    setPage(0);
  };

  const handleSelectAllUsers = (event) => {
    if (event.target.checked) {
      let list = users?.map((item) => item?._id);
      setSelectedUsersList(list);
    } else {
      setSelectedUsersList([]);
    }
  };

  const handleSelectUser = (event, id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsersList(selectedUsers?.filter((item) => item !== id));
    } else {
      setSelectedUsersList([...selectedUsers, id]);
    }
  };

  const isSelected = (id) => selectedUsers.includes(id);

  return (
    <>
      <Button onClick={handleCreateClick}>Add User</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHeadComponent
            numSelectedRow={selectedUsers.length}
            numRow={users?.length}
            handleSelectAllUsers={handleSelectAllUsers}
          />
          <TableBody>
            {users
              ?.slice(page * countPerPage, page * countPerPage + countPerPage)
              .map((user) => (
                <User
                  key={user?._id}
                  user={user}
                  handleEditClick={handleEditClick}
                  isSelected={isSelected}
                  handleSelectUser={handleSelectUser}
                />
              ))}
          </TableBody>
          <TablePagination
            count={users?.length}
            onPageChange={handlePageChange}
            page={page}
            rowsPerPage={countPerPage}
            rowsPerPageOptions={[5, 10, 20]}
            onRowsPerPageChange={handlePageRowsCountChange}
          />
        </Table>
      </TableContainer>

      <UserForm
        modalType={modalType}
        open={open}
        selectedUser={selectedUser}
        closeModal={closeModal}
      />
    </>
  );
}
