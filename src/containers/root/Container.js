// @flow
import React from 'react';
import InteractiveTable from './../interactiveTable/Container';
import Loader from './../../components/loader/Component';
import ActionBar from './../../components/bars/actionBar/Component';
import { petService } from './../../service';
import styles from './Styles';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type State = {     
  pets: Array<Object>,
  showLoader: boolean,
  errorMsg: string
}; 

class Root extends React.Component<any, any, State> {
  state: State = {
    pets: [],
    showLoader: true,
    errorMsg: ""
  }
  getData() : void {
    petService.fetch().then(
      this.onSuccess.bind(this),
      this.onError.bind(this)
    );
  }
  componentDidMount() : void {
    this.getData();
  }
  onSuccess(response: Array<Object>) : void {
    this.setState({ 
      pets: response,
      showLoader: false,
      errorMsg: ""
    });
  }
  onError(errorMsg: string) : void {
    this.setState({
      showLoader: false,
      errorMsg: errorMsg
    });
  }
  onRefresh = () : void => {
    this.setState({ showLoader: true })
    this.getData();
  }
  render() : React$Element<MuiThemeProvider> {
    const showLoader = this.state.showLoader;
    const isError = !!this.state.errorMsg.length;
    const showError = isError && !showLoader;
    const showInteractiveTable = !isError && !showLoader;

  return (
    <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
      <div style={ styles.root }>
        <ActionBar 
          title="Pets summary" 
          actionIcon="refresh"
          actionTooltipText="Reload data"
          onChange={ this.onRefresh }
        />
        <section>
            { showLoader &&
              (<Loader label="Loading data" />)
            }
            { showError &&
              (
                <p style={ styles.errorMsg }>
                  Fetching data failed: { this.state.errorMsg }.
                  Try to reload data!
                </p>
              )
            }
            { showInteractiveTable && 
              (<InteractiveTable pets={ this.state.pets } />)
            }
        </section>
      </div>
    </MuiThemeProvider>
  );
  }
}

export default Root;