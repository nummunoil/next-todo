import { Dispatch } from 'redux';
import { Todo } from '../../types/todo';
import { ADD_TODO, GET_ALL_TODO, DELETE_TODO } from '../type';

const setTodo = (payload: any) => ({
  type: ADD_TODO,
  payload,
});

const addTodo = ({ title, subtitle }: Todo) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(setTodo({ id: Math.floor(Math.random() * 1000), title, subtitle }));
    }, 500);
  };
};

const getAllTodo = () => {
  return { type: GET_ALL_TODO, payload: null };
};

const deleteById = (id: number) => {
  return { type: DELETE_TODO, payload: { id } };
};

const exported = {
  addTodo,
  getAllTodo,
  deleteById,
};
export default exported;
