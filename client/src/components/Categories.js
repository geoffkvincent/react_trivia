import React from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'
import Category from './Category'

class Categories extends React.Component {
  state = { renderCardsForm: false }

  componentDidMount() {
    this.renderCards()
  }

  renderCards = () => {
    if (this.props.cards.length = 0) {
      this.setState({renderCardsForm: true})
    } else {
      this.setState({renderCardsForm: false})
    }
  }

  render() { 
    const {renderCardsForm} = this.state
    return (
      <Card.Group itemsPerRow={4}>
        {this.props.cats.map(cat =>
        <Card key={cat.id}>
          <Card.Content textAlign='center'>
            <h2>{cat.name}</h2>
            {renderCardsForm ? 
              <Button>Add Questions</Button>
              :
              null
            }
          </Card.Content>
          <Category id={cat.id}/>
        </Card>
        )}
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards }
}


export default connect(mapStateToProps)(Categories)
