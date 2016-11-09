import TodosConstants from './TodosConstants';

const TodosReducer = (state = {
  list: [],
  input: ''
}, action) => {
  switch (action.type) {
    case TodosConstants.UPDATE_TODO_INPUT:
      return Object.assign({}, state, {
        input: action.input
      });
    case TodosConstants.ADD_TODO:
      return Object.assign({}, state, {
        input: '',
        list: [...state.list, {
          completed: false,
          text: action.text
        }]
      });
    default:
      return state;
  }
}

export default TodosReducer;
