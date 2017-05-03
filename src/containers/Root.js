	
import React from 'react'
import InterativeTableStore from './../stores/InteractiveTableStore';
import InteractiveTable from './../components/InteractiveTable';
import { inject, observer } from 'mobx-react'
import { Provider } from 'mobx-react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MockPets from './../mocks';

const Root = observer(() => (
	<MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
		<Provider interactiveTableStore={ InterativeTableStore }>
			<InteractiveTable pets={ MockPets }/>
		</Provider>
	</MuiThemeProvider>
))

export default Root;
