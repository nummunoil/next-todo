import React from 'react';
import { Card, Button } from 'antd';

import { Todo } from '../../types/todo';
import { deleteTodo } from '../../services/todo';

interface Props {
  todos: Todo[];
  afterDelete: Function;
}

const TodoLists = (props: Props): JSX.Element => {
  const { todos, afterDelete } = props;

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    afterDelete();
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
};

export default TodoLists;
