import React from 'react'
import { Container } from 'semantic-ui-react'
import Categories from './Categories'
import Category from './Category' 

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
        <Category />
      </Container>
    )
  }
}

export default GameBoard