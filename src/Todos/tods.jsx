import React, { useState } from 'react';
import './todos.css'

const TodoApp = () => {
  const [todos, setTodos] = useState([
    <span className='text'>Book the ticket for today evening </span>,
    <span className='text'>Rent the movie for tomorrow movie  night</span>,
    <span className='text'>Confirm the slot for the yoga session tomorrow morning</span>,
    <span className='text'>Drop the parcel at Bloomingdale</span>,
    <span className='text'>Order fruits on Big Basket</span>,
    <span className='text'>Fix the production issue</span>,
    <span className='text'>Confirm my slot for Saturday Night</span>,
    <span className='text'>Get essentials for Sunday car wash</span>,
    
  
    
    
  ]);

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
        <div className='card text-center p-5'>
      <h1 className='text-danger'>Simple Todo App</h1>
      <ul className='ListIteams'>
        {todos.map((todo, index) => (
          <li key={index} className='liiteams'>
            {todo}
            <button onClick={() => handleDelete(index)} className='butt'>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoApp;