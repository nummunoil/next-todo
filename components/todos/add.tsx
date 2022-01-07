import React from 'react';
import { Form, Input, Button } from 'antd';
import { addTodo } from '../../services/todo';

interface Props {
  afterAdd: () => void;
}

const AddTodo = (props: Props): JSX.Element => {
  const { afterAdd } = props;
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    if (values.title === undefined || values.subtitle === undefined) return;
    addTodo(values);
    form.resetFields();
    afterAdd();
  };

  return (
    <Form layout='inline' form={form} onFinish={onFinish}>
      <Form.Item label='Title' name='title' required>
        <Input placeholder='title' />
      </Form.Item>
      <Form.Item label='Subtitle' name='subtitle' required>
        <Input placeholder='subtitle' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddTodo;
