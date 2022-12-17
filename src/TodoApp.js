import React, { useEffect} from "react";
import TodoList from "./Todolist";
import TodoForm from "./TodoForm";
import { Grid} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import useTodoState from "./hooks/useTodoState";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos,addTodo, toggleTodo, removeTodo, editTodo } =
    useTodoState(initialTodos);

  useEffect(()=> {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
 
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
