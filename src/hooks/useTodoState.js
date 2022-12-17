import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export default useInitialTodos => {
    const [todos, setTodos] = useState(useInitialTodos);
    return{
        todos,
        addTodo: (newTodoText) => {
  setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
     },
     removeTodo: (todoId) => {
  //filter out removed todo
  const updatedTodos = todos.filter((todo) => todoId !== todo.id);
  //call setTodos with the newTodo arrays
  setTodos(updatedTodos);
},
toggleTodo: (todoId) => {
  const updatedTodos = todos.map((todo) =>
    todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updatedTodos);
},
editTodo: (todoId, newTask) => {
  const updatedTodos = todos.map((todo) =>
    todoId === todo.id ? { ...todo, task: newTask } : todo
  );
  setTodos(updatedTodos);
},
    }
}
 
