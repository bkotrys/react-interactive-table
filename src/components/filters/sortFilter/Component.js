import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

class SortFilter extends React.Component {
  static propTypes = {
    onSort: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.string
  };
  static defaultProps = {
    value: ""
  };
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, index, value){
    this.setState({ value });
    this.props.onSort(value)
  }
  componentDidMount() {
    this.setState({
      value: this.props.value
    })
  }
  render() {
    return (
      <SelectField
        value={ this.state.value } 
        onChange={ this.handleChange }
        floatingLabelText="Sort by"
      >
        {
          this.props.options.map((option, idx) => (
              <MenuItem 
                key={ idx + "-" } 
                value={ option + "-"} 
                primaryText={option + " descending"} 
              />
          ))
        }
        {
          this.props.options.map((option, idx) => (
              <MenuItem 
                key={ idx + "+" } 
                value={ option + "+"} 
                primaryText={option + " ascending"} 
              />
          ))
        }
      </SelectField>
    )
  }
}

export default SortFilter;