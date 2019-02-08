import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import Category from './Category'

class Categories extends React.Component {

  

  render() { 
    return (
      <Card.Group itemsPerRow={4}>
        {this.props.cats.map(cat =>
        <Card key={cat.id}>
          <Card.Content textAlign='center'>
            <h2>{cat.name}</h2>
          </Card.Content>
          <Category id={cat.id}/>
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
