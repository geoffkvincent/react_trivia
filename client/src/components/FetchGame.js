import React from 'react'
import Home from './Home'
import GameBoard from './GameBoard'
import { getGames } from '../reducers/games'
import { getCats } from '../reducers/categories'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loader, Segment, Dimmer, Container } from 'semantic-ui-react'

class FetchGame extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getGames(this.setLoaded))
    // this.props.dispatch(getCats(this.setLoaded))
  }

  setLoaded = () => this.setState({loaded: true})

  render() {
    const { loaded } = this.state
    if (loaded) {
      return (
        <Container>
          <Switch>
            <Route exact path= '/' component={Home} />
            <Route exact path= '/games/:id' component={GameBoard}/>
            <Route render={() => <h1 className='text-center'>Four oh Four.</h1>} />
          </Switch>
        </Container>
      )
    } else {
      return (
        <Segment>
          <Dimmer>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }

}

export default connect()(FetchGame)