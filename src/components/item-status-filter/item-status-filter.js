import React from 'react';
import './item-status-filter.css'

const ItemStatusFilter = ({changeFilter}) => {
  const buttons = [
    {name: 'All', isActive: true},
    {name: 'Active', isActive: false},
    {name: 'Done', isActive: false},
  ]

  const elementsButtons = buttons.map((el) => {
    return <button key={el.name} 
                   className={ el.isActive ? "active" : "" }
                   onClick={() => changeFilter(el.name)}> 
                   
                   { el.name } 
           </button>
  })

  return(
    <div>
      { elementsButtons }
    </div>
  );
}

export default ItemStatusFilter;