import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleComposition from './common/header.jsx';
import MenuExampleIcons from './common/nav-left.jsx';
class Index extends React.Component {
	render() {
		return(
			<div>
				<MuiThemeProvider>
					<AppBarExampleComposition />
				</MuiThemeProvider>
				<MuiThemeProvider>
					<MenuExampleIcons />
				</MuiThemeProvider>
				{this.props.children || <div className="default">Welcome to your dataPlatform</div>}
			</div>
		);
	}
}

export default Index;
