import TodosConstants from './TodosConstants';

const TodosActions = {
  add: (text) => ({
    type: TodosConstants.ADD_TODO,
    text
  }),
  updateInput: (input) => ({
    type: TodosConstants.UPDATE_TODO_INPUT,
    input
  })
};

export default TodosActions;
