import { Paper, TextField } from '@mui/material';
import useInputStat from './hooks/useInputState';
import React, { useState } from 'react';


function TodoForm ({id,addTodo}) {
    const [value, handleChanges,reset] = useInputStat("");

return(
    <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
        <form onSubmit={e =>{
            e.preventDefault();
            addTodo(value);
            reset();
        }}>
        <TextField value={value} 
        onChange={handleChanges} 
        margin= "normal"  
        label= "Add The New Todos"
         fullWidth></TextField>
        </form>
    </Paper>
)
};
export default TodoForm;