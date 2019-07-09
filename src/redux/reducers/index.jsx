import { combineReducers } from 'redux';
import todoReducer from './Todo/todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer
});

export default rootReducer;
