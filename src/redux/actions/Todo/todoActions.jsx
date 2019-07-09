export const ADD_ITEM = "ADD_ITEM";
export const COMP_ITEM = "COMP_ITEM";
export const CHANGE_ITEM = "CHANGE_ITEM";
export const REM_ITEM = "REM_ITEM";

export const addItem = data => {
  return {
    type: ADD_ITEM,
    payload: data
  };
}

export const completeTodo = id => {
  return {
    type: COMP_ITEM,
    id
  }
}

export const changeItem = (data) => {
  return {
    type: CHANGE_ITEM,
    payload: data
  }
}

export const remItem = id => {
  return {
    type: REM_ITEM,
    id
  }
}
