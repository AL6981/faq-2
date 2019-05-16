import React from 'react';
import Question from '../components/Question';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import FAQContainer from './FAQContainer'
import LauncherList from '../components/LauncherList'
import LauncherShow from '../components/LauncherShow'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path ='/'>
        <IndexRoute component={FAQContainer}></IndexRoute>
        <Route path='/launchers' component={LauncherList}/>
        <Route path='/launchers/:id' component={LauncherShow}/>
      </Route>
    </Router>
  )
}


export default App;
