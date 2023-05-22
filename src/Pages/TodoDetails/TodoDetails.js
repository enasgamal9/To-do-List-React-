import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTodos } from '../../todoStorage'; // Import the storage function
import './TodoDetails.css'; // Import the CSS file

const TodoDetails = () => {
  const { todoRowID } = useParams();
  const todos = getTodos();
  const todo = todos.find((todo) => todo.id === parseInt(todoRowID));

  if (!todo) {
    return <p>Todo not found.</p>;
  }

  return (
    <div className="homeStyle">
      <h1>Todo Details</h1>
      <div>
        <h3>Todo ID: {todo.id}</h3>
        <p>Content: {todo.content}</p>
        <p>Date: {todo.date}</p>
      </div>
      <Link to="/todo-list" className="link-back">Go Back to Todo List</Link>
    </div>
  );
};

export default TodoDetails;
