import React from 'react';
import { connect } from 'react-redux';
import { Toolbar } from './toolbar';
import { Todos, TodosActions } from './todos';

const TodoApp = props => (
  <div>
    <Toolbar />
    <Todos {...props}/>
  </div>
);

export default connect(
  state => ({
    input: state.todos.input,
    list: state.todos.list
  }),
  dispatch => ({
    updateInput: input => dispatch(TodosActions.updateInput(input)),
    addTodo: text => dispatch(TodosActions.add(text))
  })
)(TodoApp);
