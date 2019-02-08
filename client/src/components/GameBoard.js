import React from 'react'
import { connect } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import Categories from './Categories'
import CatForm from './CatForm'

class GameBoard extends React.Component {
  state = {renderCatForm: false}

  componentDidMount() {
    if (this.props.cats.length <= 0) {
      this.setState({renderCatForm: true})
    } else {
      this.setState({renderCatForm: false})
    }
  }

  render() {
    const { game } = this.props
    const { renderCatForm } = this.state
    return (
      <>
      <Header as='h1' textAlign='center'>{game.name}</Header>
      { renderCatForm ? <CatForm /> 
      : 
      <Container style={{padding: '20px', borderStyle: 'solid'}}>
        <Categories /> 
      </Container>
      }
      </>
    )
  }
} 

const mapStateToProps = (state, props) => {
  return { 
    game: state.games.find( g => g.id === parseInt(props.match.params.id)),
    cats: state.cats
  }
}


export default connect(mapStateToProps)(GameBoard)
