import React from 'react'
import Home from './Home'
import GameBoard from './GameBoard'
import { Loader, } from 'semantic-ui-react'

class FetchGame extends React.Component {
  state = { loaded: false }

  

  render() {
    return (
     <Container>
       <Switch>
         <Route exact path= '/' component={Home} />
         <Route exact path= '/games/:id' component={GameBoard}/>
         <Route render={() => <h1 className='text-center'>Four oh Four.</h1>} />
       </Switch>
     </Container>
    );
  }

}

export default FetchGame