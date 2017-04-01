/* global document */

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';
import {Provider} from 'react-redux'
import {Store} from '../imports/redux/store'
import React from 'react'
// import '../imports/ui/helpers/ClientServerCommon.js';

function AppRoot(){
	return (
		<Provider store={Store}>
			{renderRoutes()}
		</Provider>
		);
}

Meteor.startup(() => {
  render(<AppRoot />, document.getElementById('render-target'));
});