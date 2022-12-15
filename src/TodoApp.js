import React, { useState } from "react";
import TodoList from "./Todolist";
import TodoForm from "./TodoForm";
import { Grid} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import { v4 as uuidv4 } from "uuid";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grew beards", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
 
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };
  const removeTodo = (todoId) => {
    //filter out removed todo
    const updatedTodos = todos.filter(todo => todoId !== todo.id);
    //call setTodos with the newTodo arrays
     setTodos(updatedTodos);
  };
  const toggleTodo = ( todoId )=>{
    console.log(todoId)
    const updatedTodos = todos.map(todo =>
      todoId === todo.id ? {...todo, completed: !todo.completed }: todo
      );
    setTodos(updatedTodos)
  };
  const editTodo = (todoId,newTask) =>{
    console.log('ne task',newTask)
    const updatedTodos = todos.map((todo) =>
      todoId === todo.id ? { ...todo, task: newTask} : todo
    );
    setTodos(updatedTodos);

  }
   return (
     <Paper
       style={{
         padding: 0,
         margin: 0,
         height: "100vh",
         backgroundColor: "#fafafa",
       }}
       elevation={0}
     >
       <AppBar color="primary" position="static" style={{ height: "64px" }}>
         <Toolbar>
           <Typography color="inherit">TODO WITH HOOKS</Typography>
         </Toolbar>
       </AppBar>
       <Grid container justify="center" style={{ marginTop: "1rem" }}>
         <Grid item xs={11} lg={4} md={8}>
           <TodoForm addTodo={addTodo}  />
           <TodoList
             key={todos}
             todos={todos}
             removeTodo={removeTodo}
             toggleTodo={toggleTodo}
             editTodo={editTodo}
            
           />
         </Grid>
       </Grid>
     </Paper>
   );
}
export default TodoApp;
