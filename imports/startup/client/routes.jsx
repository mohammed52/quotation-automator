import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import '....imports/ui/Test1.js'

import AppContainer from '../../ui/containers/AppContainer.jsx'
// import VoteYouCan from '../../ui/components/VoteYouCan'
import HomeContainer from '../../ui/containers/HomeContainer'
import NewPalletRack from '../../ui/components/NewPalletRack'

export const renderRoutes = () => (
    <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={HomeContainer} />
        <Route path="/home" component={HomeContainer} />
        <Route path="/newpalletrack" component={NewPalletRack} />
      </Route>    
  </Router>

  );