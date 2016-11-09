import React from 'react';
import Todo from './Todo.jsx';
import styles from './Todos.scss';

const Todos = props => (
  <div className="todos">
    <div className="todos--input">
      <input
        type="text"
        className="todos--input-entry"
        placeholder="Add another todo"
        value={props.input}
        onChange={event => props.updateInput(event.target.value)}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            props.addTodo(props.input);
          }
        }}
      />
    </div>
    <div className="todos--list">
      {props.list.map((todo, index) => (
        <Todo
          key={index}
          {...todo}
        />
      ))}
    </div>
  </div>
);

export default Todos;
