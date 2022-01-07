import { ADD_TODO, DELETE_TODO, GET_ALL_TODO } from '../type';
import { Todo } from '../../types/todo';

const initialState: Todo[] = [];

export function TodosReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case GET_ALL_TODO:
      return [
        ...payload,
        // { id: 123, title: 'ttt', subtitle: 'mock data' },
        // { id: 1234, title: 'rrr', subtitle: 'mock data 2' },
        // { id: 12345, title: 'eee', subtitle: 'mock data 3' },
      ];

    case ADD_TODO:
      return [...state, payload];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
}
