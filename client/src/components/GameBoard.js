import React from 'react'
import { Container } from 'semantic-ui-react'
import Categories from './Categories'
import Category from './Category' 

class GameBoard extends React.Component {

  

  render() {
    return (
      <Container style={{padding: '20px'}}>
        <Categories/>
        <Category />
      </Container>
    )
  }
}

export default GameBoard
