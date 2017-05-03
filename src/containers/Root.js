import React from 'react';
import InteractiveTable from './interactiveTable/Container';
import MockPets from './../mocks';

import AppBar from 'material-ui/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Root = () => (
	<MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
			<InteractiveTable pets={ MockPets }/>
	</MuiThemeProvider>
);

export default Root;