import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    this.props.onFilterChange(this.props.name, e.target.checked);
  }
  render() {
    const name = this.props.name;

    return (
      <label >
        <input 
          type="checkbox" 
          defaultChecked={ this.props.checked }
          onChange={ this.onChange }
        />  
        { name }
      </label>      
    )
  }
}

export default Filter;