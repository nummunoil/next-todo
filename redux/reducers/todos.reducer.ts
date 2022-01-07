import { ADD_TODO, DELETE_TODO, GET_ALL_TODO } from '../type';
import { Todo } from '../../types/todo';

const initialState: Todo[] = [];

export function TodosReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_ALL_TODO:
      return payload;

    case ADD_TODO:
      return [...state, payload];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
}
