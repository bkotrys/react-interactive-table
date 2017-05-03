import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { useStrict } from 'mobx'

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
injectTapEventPlugin();
useStrict(true);

ReactDOM.render(<Root/>, document.getElementById('root'));
