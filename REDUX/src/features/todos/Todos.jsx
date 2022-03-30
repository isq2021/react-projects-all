import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "./todosSlice";

import { List, FlexboxGrid, IconButton, Icon } from "rsuite";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <List bordered>
      {todos.map(({ txt, id }, index) => (
        <List.Item bordered>
          <FlexboxGrid key={id}>
            <FlexboxGrid.Item colspan={12}>{txt}</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={10}></FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={2}>
              <IconButton
                onClick={() => dispatch(deleteTodo(id))}
                icon={<Icon icon="minus" />}
                color="red"
                circle
              />
              <IconButton icon={<Icon icon="magic" />} color="blue" circle />
              <IconButton
                icon={<Icon icon="address-book" />}
                color="yellow"
                circle
              />
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </List.Item>
      ))}
    </List>
  );
}
