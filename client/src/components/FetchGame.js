import React from 'react'
import Home from './Home'
import GameBoard from './GameBoard'
import { getGames } from '../reducers/games'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loader, } from 'semantic-ui-react'

class FetchGame extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    
  }

  setLoaded = () => this.setState({loaded: true})

  render() {
    return (
       <Switch>
         <Route exact path= '/' component={Home} />
         <Route exact path= '/games/:id' component={GameBoard}/>
         <Route render={() => <h1 className='text-center'>Four oh Four.</h1>} />
       </Switch>
    );
  }

}

export default connect()(FetchGame)