import React from 'react';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Todo from './hooks/Todo';


function  TodoList({todos,removeTodo,toggleTodo,editTodo}) {
   if(todos.length) 
   return (
      <Paper>
        <List>
          {todos.map((todo,i) => (
            <div key={`${todo.id}`}>
              <Todo
                task={todo.task}
                id={todo.id}
                completed={todo.completed}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
              />
             {i < todos.length -1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
    return null;

}
 export default TodoList
