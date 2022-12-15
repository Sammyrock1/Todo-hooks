import React from 'react';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Todo from './hooks/Todo';


function  TodoList({todos,removeTodo,toggleTodo,editTodo}) {
  console.log(todos)
  
    return (
      <Paper>
        <List>
          {todos.map((todo) => (
            <div key={`${todo.id}`}>
              <Todo
                task={todo.task}
                id={todo.id}
                completed={todo.completed}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
              />
              <Divider />
            </div>
          ))}
        </List>
      </Paper>
    );

}
 export default TodoList
