import React from 'react'
import { Card } from 'semantic-ui-react'

class Categories extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Card.Group itemsPerRow={4}>
        <Card>
          <Card.Content>React 101</Card.Content>
        </Card>
        <Card>
          <Card.Content>React es 2015</Card.Content>
        </Card>
        <Card>
          <Card.Content>React es6</Card.Content>
        </Card>
        <Card>
          <Card.Content>Advanced React</Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

export default Categories