import React, { useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(
        'https://pern-server-peach.vercel.app/todos',
      );
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  //delete
  const deleteTodo = async (id) => {
    try {
      const deletedTodo = await fetch(
        `https://pern-server-peach.vercel.app/todos/${id}`,
        {
          method: 'DELETE',
        },
      );

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table className='table table-striped mt-5 text-center'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteTodo(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
