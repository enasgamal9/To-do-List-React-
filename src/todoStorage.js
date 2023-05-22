export const saveTodo = (todo) => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('Saved todos:', todos); // Check the console for the saved todos
  };
  
  export const getTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log('Retrieved todos:', todos); // Check the console for the retrieved todos
    return todos;
  };
  
  export const saveTodoEdit = (todo, index) => {
    const todos = getTodos();
    const updatedTodo = {
      id: todo.id,
      content: todo.content,
      createdAt: todo.createdAt || new Date().toISOString(),
      // Add any other properties you want to update or set for the todo
    };
  
    if (typeof index === 'number' && index >= 0 && index < todos.length) {
      // Edit an existing todo
      todos[index] = updatedTodo;
    } else {
      // Add a new todo
      todos.push(updatedTodo);
    }
  
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  export const deleteTodo = (index) => {
    const todos = getTodos();
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }