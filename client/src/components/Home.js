import React from 'react'
import {connect} from 'react-redux'
import { getGames } from '../reducers/games'
import { Container, Header, Card, Button } from 'semantic-ui-react'
import GameForm from './GameForm'
import styled from 'styled-components'

class Home extends React.Component {
  state = { showForm: false }

  componentDidMount(){
    this.props.dispatch(getGames())
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm})

  renderGames = () => {
    const {games} = this.props
    return (
      <Card.Group centered>
        {games.map(game => 
          <Card key={game.id}>
            <Card.Content>
              <Card.Header>{game.name}</Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }

  render() {
    const { showForm } = this.state
    return (
      <Container>
        <Header as='h1' textAlign='center'>Jeaparody</Header>
        <Button onClick={this.toggleForm}>
          Create Game
        </Button>
        { showForm ? <GameForm /> : null }
        { this.renderGames() }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {games: state.games}
}

export default connect(mapStateToProps)(Home)