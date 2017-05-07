// @flow
import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

type Props = { 
  onSort:   Function,
  options:  Array<string>,
  value:    string
}
type State = {     
  value: string
}

class SortFilter extends React.Component<any, Props, State> {
  props: {
    onSort:   Function,
    options:  Array<string>,
    value:    string
  };
  state: State = {
    value: ""
  }
  handleChange = (event: Object, index: number, value: string): void => {
    this.setState({ value });
    this.props.onSort(value)
  }
  componentDidMount() : void {
    this.setState({
      value: this.props.value
    })
  }
  render() : React$Element<SelectField> {
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