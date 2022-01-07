import { combineReducers } from 'redux';
import { TodosReducer } from './todos.reducer';

const rootReducer = combineReducers({
  todos: TodosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
