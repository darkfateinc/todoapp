import { ADD_ITEM } from "../../actions/Todo/todoActions";
import { COMP_ITEM } from "../../actions/Todo/todoActions";
import { CHANGE_ITEM } from "../../actions/Todo/todoActions";
import { REM_ITEM } from "../../actions/Todo/todoActions";

function randomInteger(min=0, max=100000) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

const initState = [];

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_ITEM:
      let newState = state.concat(
        {
          text: action.payload.text,
          id: randomInteger(),
          completed: false,
          rating: action.payload.rating,
          date: action.payload.date,
          old: action.payload.old
        })
        return newState
    case CHANGE_ITEM:
        const updated = state.map((e,i)=> {
          if(e.id===action.payload.id){
            return { ...e, ...action.payload}
          }
          return e
        })
        return updated
    case COMP_ITEM:
      return state.map(todo =>
          (todo.id === action.id)
              ? {...todo, completed: !todo.completed}
              : todo
      );
    case REM_ITEM:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}
