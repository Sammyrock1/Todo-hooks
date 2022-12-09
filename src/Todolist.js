import React from 'react';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import  ListItemText from '@mui/material/ListItemText';


function  TodoList(props) {
  console.log(props);
    return (
      <Paper>
        <List>
          {props.todos.map((todo) => (
            <div key={todo.id}>
            <ListItem>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider/>
            </div>
          ))}
        </List>
      </Paper>
    );

}
 export default TodoList
