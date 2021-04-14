import React, {Component} from 'react';
import AddItemForm from '../add-item-from';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import './app.css';

export default class App extends Component {

  idCounter = 10;

  state = {
    items: [
      this.createItem("Поспать"),
      this.createItem("Настя, пост напиши"),

      this.createItem("Позаниматься спортом")
    ],
    searchText: '',
    filter: 'Active'
  }

  createItem(text) {
    return { label: text, important: false, done: false, id: this.idCounter++}
  } 

  onItemAdded = (text) => {
    this.setState( ({ items }) => {
      const newItem = this.createItem(text);
      return {
        items: [...items, newItem]
      }
    });
  } 

  findIdx(arr, id) {
    return arr.findIndex((el)=>el.id === id);
  }

  onDelete = (id) => {
    this.setState(({ items }) =>{
      const idx = this.findIdx( items, id);
      return {
        items: [...items.slice(0, idx), ...items.slice(idx+1)]
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({items})=> {
      const newItems = this.onToggleProperty(items, id, 'important');
      return {
        items: newItems
      }
    });
  }

  onToggleDone = (id) => {
    this.setState(({items})=> {
      const newItems = this.onToggleProperty(items, id, 'done');
      return {
        items: newItems
      }
    });
  }

  onToggleProperty = (items, id, property ) => {
    const idx = this.findIdx(items, id);
    const oldItem = items[idx];
    const value = !oldItem[property];

    const newItem = {...oldItem, [property]: value}

    return [ ...items.slice(0, idx), newItem, ...items.slice(idx+1)]
  }

  searchItems = (items, searchText) => {
    if (searchText.length === 0) {
      return items;
    }
    return items.filter( (item) => {
      return item.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    });
  }

  onSearchText = (text) => {
    this.setState({
      searcText: text
    });
  }

  filterItems(items, filter) {
    if (filter == "All") {
      return items;
    } else if (filter == "Active") {
      return items.filter((item) => !item.done);
    } else if (filter == "Done") {
      return items.filter((item) => item.done);
    }
  }

  onChangeFilter = (filterName) => {
    this.setState({
      filter: filterName 
    });
  }

  render () {
    const { items, filter, searchText } = this.state;
    const doneCount = items.filter((item)=> item.done).length;
    const todoCount = items.length - doneCount;

    const visibleItems = this.searchItems(this.filterItems(items, filter), searchText);
    return (
      <div>
        <AppHeader doneCount = { doneCount } todoCount = { todoCount }/>
        <ItemStatusFilter changeFilter={ this.onChangeFilter}/>
        <SearchPanel onSearchText = { this.onSearchText }/>
        <TodoList todos={ visibleItems } 
                  onDelete={ this.onDelete}
                  onToggleImportant = { this.onToggleImportant }
                  onToggleDone = { this.onToggleDone }/>
        <AddItemForm onItemAdded={ this.onItemAdded }/>
      </div>
      
    );
  }

}

