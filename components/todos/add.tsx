import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import actions from '../../redux/actions';

interface Props {}

export default function AddTodo(props: Props): JSX.Element {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    if (values.title === undefined || values.subtitle === undefined) return;
    dispatch(actions.addTodo(values));
    form.resetFields();
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
}
