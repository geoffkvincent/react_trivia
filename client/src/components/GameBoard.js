import React from 'react'
import { connect } from 'react-redux'
import { getGame } from '../reducers/games'
import { Container, Header } from 'semantic-ui-react'
import Categories from './Categories'

class GameBoard extends React.Component {

  render() {
    return (
      <>
      <Header as='h1' textAlign='center'></Header>
      <Container style={{padding: '20px', borderStyle: 'solid'}}>
        <Categories/>
      </Container>
      </>
    )
  }
} 

export default connect()(GameBoard)
