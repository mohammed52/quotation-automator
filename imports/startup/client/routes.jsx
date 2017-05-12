import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import '....imports/ui/Test1.js'

import AppContainer from '../../ui/containers/AppContainer.jsx'
import ShowAllQuotesContainer from '../../ui/containers/ShowAllQuotesContainer.jsx'
// import VoteYouCan from '../../ui/components/VoteYouCan'
import HomeContainer from '../../ui/containers/HomeContainer'
import ShowAllQuotes from '../../ui/components/ShowAllQuotes'
import ShowQuote from '../../ui/components/ShowQuote'
import SignInContainer from '../../ui/containers/SignInContainer'
import WrapperLoggedInComponents from '../../ui/components/WrapperLoggedInComponents'
import NewPalletRackContainer from '../../ui/containers/NewPalletRackContainer'

export const renderRoutes = () => (
    <Router history={browserHistory}>
    
    <Route path="/" component={AppContainer}>
      <IndexRoute component={SignInContainer} />
        <Route path="/signin" component={SignInContainer} />  
        <Route component={WrapperLoggedInComponents} >
          <Route path="/home" component={HomeContainer} />
          <Route path="/newpalletrack" component={NewPalletRackContainer} />
          <Route path="/showallquotes" component={ShowAllQuotesContainer} />
          <Route path="/showquote" component={ShowQuote} />
        </Route>
    </Route>
  </Router>

  );