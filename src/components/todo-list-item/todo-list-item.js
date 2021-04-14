import React, {Component} from 'react';
import './todo-list-item.css';
import trash from '../../img/trash.png' // relative path to image 

export default class TodoListItem extends Component{
    
  render() {
    const {label, important, done, onDelete, onToggleImportant, onToggleDone} = this.props;

    let classNames = "";
    
    if (important) {
      classNames += " important";
    }

    if (done) {
      classNames += " done";
    }

    return (
      <span>
        <span className={ classNames } onClick = {onToggleDone}>{ label }</span>
        <button onClick={ onDelete }>
          <img src={trash} height="20px"/>
        </button>
        <button onClick={ onToggleImportant }>!</button>
      </span>
    );
  }
}  