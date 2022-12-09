import  React, { useState } from "react";
import TodoList from "./Todolist";
import TodoForm from "./TodoForm";

import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

function TodoApp(){
    const initialTodos = [
      { id: 1, task: "Clean Fishtank", completed: false },
      { id: 2, task: "Wash Car", completed: true },
      { id: 3, task: "Grew beards", completed: false },
    ];
    const [todos,setTodos] = useState(initialTodos)
    console.log(todos)
    const addTodo = newTodoText => {
        console.log("newTodoText",newTodoText)
        setTodos([...todos,{id: 4, task: newTodoText, completed: false}])
    }
    return(
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }} elevation={0}>
        <AppBar color="primary" position="static" style={{height: "64px"}}>
            <Toolbar>
                <Typography color="inherit">TODO WITH HOOKS</Typography>
            </Toolbar>
        </AppBar>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
        </Paper>
    )

}
export default TodoApp;