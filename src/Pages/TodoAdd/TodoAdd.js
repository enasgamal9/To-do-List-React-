import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveTodo } from '../../todoStorage'; // Import the storage function
import './TodoAdd.css';

const CreateTodoPage = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.length < 5 && content.length>100) {
      // Show an error message if the todo name is too short
      alert('Todo name must be between 5 and 100 characters');
    } else {
      // Save the todo to local storage
      saveTodo({
        id: Date.now(),
        content,
        date: new Date().toLocaleDateString(),
      });

      navigate('/todo-list'); // Navigate to the list page after submission
    }
  };

  return (
    <div className="homeStyle">
      <h1 style={{ color: '#7663E1' }}>Create New Todo</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Enter todo content..."
          required
          style={{ borderColor: '#7663E1' }}
        ></textarea>
        <button className='addBtn' type="submit" style={{ backgroundColor: '#62ADFF', color: 'white' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTodoPage;
