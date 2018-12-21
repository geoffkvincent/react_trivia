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
        <Card>
          <Card.Content textAlign='center'>
            <h2>React 101</h2>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content textAlign='center'>
            <h2>React es 2015</h2>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content textAlign='center'>React es6</Card.Content>
        </Card>
        <Card>
          <Card.Content textAlign='center'>Advanced React</Card.Content>
        </Card>
        <Category />
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return { cats: state.categories }
}

export default connect(mapStateToProps)(Categories)