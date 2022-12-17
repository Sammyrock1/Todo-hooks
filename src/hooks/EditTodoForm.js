import React, { useState } from 'react';
import { TextField } from '@mui/material';
import useInputState from './useInputState';

 function EditTodoForm({id,editTodo,task, toggle}) {
    const [ value, handleChanges,reset] = useInputState(task)
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value);
          toggle();
          reset();
        }}
      style={{marginLeft: "1rem", width: "100%"}}
      >
        <TextField
          margin="normal"
          value={value}
          onChange={handleChanges}
          fullWidth
          autoFocus
        />
      </form>
    );
    
 }
 export default EditTodoForm;