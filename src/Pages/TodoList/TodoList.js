import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getTodos } from '../../todoStorage'; // Import the storage function
import './TodoList.css'

const ListPage = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage on component mount
  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const handleDelete = (index) => {
    // Delete the todo item at the given index
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    // Update the todos in local storage
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="homeStyle">
      <h1>Todo List</h1>
      {todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        <ul className="list-group list_ul">
          {todos.map((todo, index) => (
            <li key={todo.id} className="list_li list-group-item d-flex justify-content-between align-items-center">
              <div>
                <span>{todo.content}</span>
                <span className="ml-2 text-muted">{todo.date}</span>
              </div>
              <div>
                <Link to={`/todo-details/${todo.id}`} className="btn btn-primary mr-2">Details</Link>
                <Link to={`/todo-update/${todo.id}`} className="btn btn-info mr-2">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
                <button onClick={() => handleDelete(index)} className="btn btn-danger">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/todo-add" className="btn btn-success mt-4">Create New Todo</Link>
    </div>
  );
};

export default ListPage;
