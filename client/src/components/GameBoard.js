import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Categories from './Categories'

class GameBoard extends React.Component {

  render() {
    return (
      <>
      <Header as='h1' textAlign='center'>React Trivia</Header>
      <Container style={{padding: '20px', borderStyle: 'solid'}}>
        <Categories/>
      </Container>
      </>
    )
  }
} 

export default GameBoard
