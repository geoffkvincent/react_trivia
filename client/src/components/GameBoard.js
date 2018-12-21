import React from 'react'
import { Container } from 'semantic-ui-react'
import Categories from './Categories' 

class GameBoard extends React.Component {

  renderGame = () => {
    return (
      <div></div>
    )
  }

  render() {
    return (
      <Container>
        <Categories/>
       
      </Container>
    )
  }
}

export default GameBoard