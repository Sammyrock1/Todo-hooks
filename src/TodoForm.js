import { Paper, TextField } from '@mui/material';
import useInputStat from './hooks/useInputState';
import React, { useState } from 'react';


function TodoForm ({addTodo}) {
    const [value, handleChanges,reset] = useInputStat("");

return(
    <Paper>
        <form onSubmit={e =>{
            e.preventDefault();
            addTodo(value);
            reset();
        }}>
        <TextField value={value} onChange={handleChanges}></TextField>
        </form>
    </Paper>
)
};
export default TodoForm;