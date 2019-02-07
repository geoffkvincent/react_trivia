import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import FetchGame from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return (
     <Container>
       <Switch>
         <Route exact path= '/' component={FetchGame} />
       </Switch>
     </Container>
    );
  }
}

export default App;
