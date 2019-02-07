import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import FetchGame from './components/FetchGame'

class App extends React.Component {
  render() {
    return (
     <Container>
       <Switch>
         <Route path= '/' component={FetchGame} />
       </Switch>
     </Container>
    );
  }
}

export default App;
