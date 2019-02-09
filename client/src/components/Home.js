import React from 'react'
import {connect} from 'react-redux'
import {deleteGame} from '../reducers/games'
import { Link } from 'react-router-dom'
import { Container, Header, Card, Button, Icon } from 'semantic-ui-react'
import GameForm from './GameForm'

class Home extends React.Component {
  state = { showForm: false }

  toggleForm = () => this.setState({ showForm: !this.state.showForm})

  renderGames = () => {
    const { games, dispatch } = this.props
    return (
      <Card.Group centered style={{padding: '10px'}}>
        {games.map(game => 
          <Card key={game.id}>
            <Card.Content>
              <Link to={`/games/${game.id}`}>
                <Card.Header>{game.name}</Card.Header>
              </Link>
            </Card.Content>
            <Card.Content extra>
              <Icon 
                onClick={ () => dispatch(deleteGame(game.id))}
                name='trash'
                style={{ cursor: 'pointer'}}
              />
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
        <Button  fluid  color={'purple'} onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Create Game'}
        </Button>
        { showForm ? <GameForm toggleForm={this.toggleForm}/> : null }
        { this.renderGames() }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {games: state.games}
}

export default connect(mapStateToProps)(Home)