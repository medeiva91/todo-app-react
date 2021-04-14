import React, { Component } from 'react';


export default class AddItemForm extends Component {

  state = {
    value: ""
  }

  onChangeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onItemAdded(this.state.value);
    this.setState({
      value: ""
    })
  }

  render() {
    return(
      <form onSubmit={ this.onSubmit }>
        <input  value={this.state.value} onChange={ this.onChangeValue }/>
        <button type="submit">AddItem</button>
      </form>
    );
  }

}