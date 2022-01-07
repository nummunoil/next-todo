import React, { useEffect, useState } from 'react';

import { getTodo } from '../../services/todo';
import AddTodo from './add';
import TodoLists from './lists';

interface Props {}

const Todo = (props: Props) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allTodo = await getTodo();
    setTodos(allTodo);
  };

  return (
    <>
      <div style={{ border: 'dotted', borderColor: '#fff', padding: '5px 20px' }}>
        <AddTodo afterAdd={fetchData} />
      </div>
      <TodoLists todos={todos} afterDelete={fetchData} />
    </>
  );
};

export default Todo;
