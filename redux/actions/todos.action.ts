import axios from 'axios';
import { Dispatch } from 'redux';
import { Todo } from '../../types/todo';
import { ADD_TODO, GET_ALL_TODO, DELETE_TODO } from '../type';

const addTodo = ({ title, subtitle }: Todo) => {
  return async (dispatch: Dispatch) => {
    const res = await axios.post('http://localhost:3000/todo', { title, subtitle });
    return dispatch({ type: ADD_TODO, payload: res.data });
  };
};

const getAllTodo = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get('http://localhost:3000/todo');
    return dispatch({ type: GET_ALL_TODO, payload: res.data });
  };
};

const deleteById = (id: number) => {
  return async (dispatch: Dispatch) => {
    const res = await axios.delete(`http://localhost:3000/todo/${id}`);
    return dispatch({ type: DELETE_TODO, payload: { id } });
  };
};

const exported = {
  addTodo,
  getAllTodo,
  deleteById,
};
export default exported;
