import React from 'react';

const AppHeader = ({todoCount, doneCount}) => {
  return (
    <div>
      <div>Мой список дел:</div>
      <div> { todoCount } активновное дело, { doneCount } сделано</div>
    </div>
  );
}

export default AppHeader;