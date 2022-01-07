import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../redux/actions';
import AddTodo from './add';
import TodoLists from './lists';

interface Props {}

const Todo = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAllTodo());
  }, []);

  return (
    <>
      <div style={{ border: 'dotted', borderColor: '#fff', padding: '5px 20px' }}>
        <AddTodo />
      </div>
      <TodoLists />
    </>
  );
};

export default Todo;
