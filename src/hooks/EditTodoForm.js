import React, { useState } from 'react';
import { TextField } from '@mui/material';
import useInputState from './useInputState';

 function EditTodoForm({id,editTodo,task, toggle}) {
    const [ value, handleChanges,reset] = useInputState(task)
    console.log("task", task, "value", value, id);
    return (
      <form onSubmit={(e) =>
         {e.preventDefault();
         editTodo(id,value);
         toggle() 
         reset();
         }}>
        <TextField
          margin="normal"
          value={value}
          onChange={handleChanges}
          fullWidth
        />
      </form>
    );
    
 }
 export default EditTodoForm;