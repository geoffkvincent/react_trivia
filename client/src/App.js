import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom'
import FetchGame from './components/FetchGame'

class App extends React.Component {
  render() {
    return (
     <Fragment>
       <Switch>
         <Route path= '/' component={FetchGame} />
       </Switch>
     </Fragment>
    );
  }
}

export default App;
