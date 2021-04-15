import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, onDelete, onToggleImportant, onToggleDone }) => {

  const elements = todos.map((item) => {
    const {id, ...itemProps } = item;
    return (
      <li key={id}>
        <TodoListItem { ...itemProps} 
                      onDelete={ () => { onDelete(id)} }
                      onToggleImportant= { () => { onToggleImportant(id) }} 
                      onToggleDone= { () => { onToggleDone(id)} }/>
      </li>
    );

  })
  return(
    <ul>
      {elements}
    </ul>
  );
}

export default TodoList;