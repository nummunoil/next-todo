import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'antd';

import { RootState } from '../../redux/reducers';
import { Todo } from '../../types/todo';
import actions from '../../redux/actions';

interface Props {}

export default function TodoLists(props: Props): JSX.Element {
  const dispatch = useDispatch();

  const todos = useSelector(({ todos }: RootState) => todos);

  const handleDelete = (id: number) => {
    dispatch(actions.deleteById(id));
  };

  return (
    <>
      {todos.map((todo: Todo) => (
        <div key={todo.id} style={{ margin: '10px 0' }}>
          <Card
            title={todo.title}
            extra={
              <Button type='link' danger onClick={() => handleDelete(todo.id)}>
                Delete
              </Button>
            }
            style={{ width: '100%' }}
          >
            {todo.subtitle}
          </Card>
        </div>
      ))}
    </>
  );
}
