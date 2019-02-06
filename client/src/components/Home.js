import React from 'react'
import {connect} from 'react-redux'
import { Container, Header, Card, Button } from 'semantic-ui-react'
import GameForm from './GameForm'
import styled from 'styled-components'

class Home extends React.Component {
  state = { showForm: false }

  compone

  toggleForm = () => this.setState({ showForm: !this.state.showForm})

  renderGames = () => {
    const {games} = this.props
    return (
      <div>
        {games.map(game => 
          <Card key={game.id}>
            <Card.Content>
              <Card.Header>{game.name}</Card.Header>
            </Card.Content>
          </Card>
        )}
      </div>
    )
  }

  render() {
    const { showForm } = this.state
    return (
      <Container>
        <Header as='h1' textAlign='center'>React Trivia</Header>
        <Button onClick={this.toggleForm}>
          Create Game
        </Button>
        { showForm ? <GameForm /> : null }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {games: state.games}
}

export default connect(mapStateToProps)(Home)