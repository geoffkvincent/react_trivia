import React from 'react'
import { Container, Header, Card, Button } from 'semantic-ui-react'
import GameForm from './GameForm'
import styled from 'styled-components'

class Home extends React.Component {
  state = { showForm: false }

  toggleForm = () => this.setState({ showForm: !this.state.showForm})

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

export default Home