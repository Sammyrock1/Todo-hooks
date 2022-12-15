import React from "react";
import useToggle from "./usetoggleState";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Checkbox } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditeIcon from "@mui/icons-material/Edit";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

function Todo({ id, task, completed, removeTodo, toggleTodo,editTodo }) {
  const [ isEditing, toggle ] = useToggle(false ); 
console.log(toggle,isEditing)
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            disableRipple
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton  onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton  onClick={toggle}>
              <EditeIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
