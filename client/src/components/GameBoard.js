import React from 'react'
import { Container } from 'semantic-ui-react'
import Categories from './Categories'

class GameBoard extends React.Component {

  render() {
    return (
      <Container style={{padding: '20px'}}>
        <Categories/>
      </Container>
    )
  }
}

export default GameBoard
