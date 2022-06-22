import React, { useState } from "react";
import { List } from '@mui/material';
import { Container } from '@mui/system';

import Form from './Componentes/Forms'
import TodoItem from './Componentes/Todoitem';






  export default function Home() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
      setTodos([...todos, todo]);
    };
  
    const deleteTodo = (id) => {
      var filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
    };
  
    const editTodo = (id, editedText) => {
      var todosArray = todos;
  
      for (var i in todosArray) {
        if (todosArray[i].id === id) {
          todosArray[i].text = editedText;
        }
      }
  
      setTodos(todosArray);
    };
  
    return (
      <Container maxWidth="xs" style={{ marginTop: "2em" }}>
        <Form addTodo={addTodo} />
        <List sx={{ marginTop: "3em" }}>
          {todos.map((todo) => (
            <div key={todo.id} style={{ marginTop: "2em" }}>
              <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
            </div>
          ))}
        </List>
      </Container>
    );
  }