import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { getTodos, saveTodo, saveTodoEdit, deleteTodo } from '../../todoStorage';
import '../TodoUpdate/TodoUpdate.css';

const TodoUpdate = () => {
  const location = useLocation();
  const { todoRowID } = useParams();
  const navigate = useNavigate();
  const todos = getTodos();
  const todo = todos.find((todo) => todo.id === parseInt(todoRowID));
  const [content, setContent] = useState('');
  const [newTodoId, setNewTodoId] = useState('');

  useEffect(() => {
    if (todo) {
      setContent(todo.content);
      setNewTodoId(todo.newTodoId);
    }
  }, []);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    if (todo) {
      deleteTodo(todo); // Remove the old todo from local storage
      const newTodo = { ...todo, id: newTodoId, content }; // Create a new todo object with the updated content and the new ID
      saveTodoEdit(newTodo);
      navigate('/todo-list');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!todo) {
      // Create a new todo with a new ID
      const newTodo = {
        id: newTodoId,
        content,
      };

      saveTodo([...todos, newTodo]);
    } else {
      // Update the todo with the new content
      const updatedTodo = { ...todo, content };

      // Update the todos array with the updated todo
      const updatedTodos = todos.map((t) => {
        if (t.id === updatedTodo.id) {
          return updatedTodo;
        }
        return t;
      });

      saveTodo(updatedTodos);
    }

    navigate('/todo-list'); // Navigate to the list page after submission
  };

  if (!todo) {
    return <p>Todo not found.</p>;
  }

  return (
    <div className="homeStyle">
      <h1 style={{ color: '#7663E1' }}>Update</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={content}
            onChange={handleContentChange}
            placeholder="Enter content..."
            required
            style={{ borderColor: '#7663E1' }}
          ></textarea>
        </div>
        <div>
          {todo && (
            <button className="updateBtn btn btn-primary" onClick={handleSave}
              style={{ backgroundColor: '#62ADFF', color: 'white' }}>
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TodoUpdate;
