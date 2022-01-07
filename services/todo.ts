import axios from 'axios';

export const getTodo = async () => {
  const res = await axios.get('http://localhost:3000/todo');
  return res.data;
};

export const deleteTodo = async (id: number) => {
  await axios.delete(`http://localhost:3000/todo/${id}`);
  return null;
};

export const addTodo = async ({ title, subtitle }: { title: string; subtitle: string }) => {
  await axios.post('http://localhost:3000/todo/', { title, subtitle });
  return null;
};
