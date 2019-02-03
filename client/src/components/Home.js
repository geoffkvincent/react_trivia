import React from 'react'
import { Container, Header, Card, Button } from 'semantic-ui-react'
import styled from 'styled-components'

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>React Trivia</Header>
        <Button>Create Game</Button>
      </Container>
    )
  }
}

export default Home