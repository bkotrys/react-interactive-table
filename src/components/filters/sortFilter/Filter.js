import React from 'react';

class SortFilter extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(e) {
    debugger;
    this.props.onSort();
  }
  render() {
    let filters = this.props.filters;

    return (
      <div className="multiple-choice-filters">
        <h3>{ this.props.label }</h3>
      </div>
    )
  }
}

export default SortFilter;