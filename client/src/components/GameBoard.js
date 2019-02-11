import React from 'react'
import { connect } from 'react-redux'
import { getCats } from '../reducers/categories'
import { Container, Header } from 'semantic-ui-react'
import Categories from './Categories'
import CatForm from './CatForm'

class GameBoard extends React.Component {
  state = {renderCatForm: false, renderCatFunc: false}

  componentDidMount() {
    const { dispatch, game } = this.props
    dispatch(getCats(game.id))
    this.catToggle()
  }

  catToggle = () => this.setState({renderCatFunc: true}, () => this.renderCat())
  
  renderCat = () => {
    if (this.props.cats.length === 0) {
      this.setState({renderCatForm: true})
    } else {
      this.setState({renderCatForm: false})
    }
    this.setState({renderCatFunc: false})
  }

  render() {
    const { game } = this.props
    const { renderCatForm, renderCatFunc } = this.state
    return (
      <div>
        {/* { renderCatFunc ? this.renderCat : null } */}
        <Header as='h1' textAlign='center'>{game.name}</Header>
        { renderCatForm ? <CatForm gameId={game.id}/> 
        : 
        <Container style={{padding: '20px', borderStyle: 'solid'}}>
          <Categories cats={this.props.cats}/> 
        </Container>
        }
      </div>
    )
  }
} 

const mapStateToProps = (state, props) => {
  return { 
    game: state.games.find( g => g.id === parseInt(props.match.params.id)),
    cats: state.categories
  }
}


export default connect(mapStateToProps)(GameBoard)
