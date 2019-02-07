import React from 'react'
import { connect } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import Categories from './Categories'

class GameBoard extends React.Component {

  render() {
    return (
      <>
      <Header as='h1' textAlign='center'>Trivia</Header>
      <Container style={{padding: '20px', borderStyle: 'solid'}}>
        <Categories/>
      </Container>
      </>
    )
  }
} 

const mapStateToProps = () => {
  
}

export default connect(mapStateToProps)(GameBoard)
