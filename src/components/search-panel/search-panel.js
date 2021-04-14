import React, { Component } from 'react';

export default class SearchPanel extends Component {

  state = {
    term: ""
  }

  onChangeTerm = (e) => {
    this.setState(
      {
        term: e.target.value
      }
    )
    
    this.props.onSearchText(e.target.value);
  }

  render() {

    return(
      <input placeholder="Поиск" 
             value={ this.state.term}
             onChange = { this.onChangeTerm}
              /> 
    );
  } 
}

