import React from 'react'
import { connect } from 'react-redux'
import { getCats } from '../reducers/categories'
import { Card } from 'semantic-ui-react'
import Category from './Category'

class Categories extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCats())
  }

  render() { 
    return (
      <Card.Group itemsPerRow={4}>
          {this.props.cats.map(cat =>
        <Card key={cat.id}>
          <Card.Content textAlign='center'>
            <h2>{cat.name}</h2>
          </Card.Content>
         
        </Card>
        )}
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return { cats: state.categories }
}

export default connect(mapStateToProps)(Categories)