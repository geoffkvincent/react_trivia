import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import GameBoard from './components/GameBoard'

class App extends React.Component {
  render() {
    return (
     <Container>
       <Switch>
         <Route exact path='/react-trivia' component={GameBoard}/>
         <Route render={() => <h1 className='text-center'>Four oh Four.</h1>} />
       </Switch>
     </Container>
    );
  }
}

export default App;
