import React from 'react'
import { addCat } from '../reducers/categories'
import { connect } from 'react-redux'
import {Form} from 'semantic-ui-react'

class CatForm extends React.Component {
  state = { cat1: '', cat2: '', cat3: '', cat4: '' }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, gameId } = this.props
    const { cat1, cat2, cat3, cat4 } = this.state
    const allCats = [{name: cat1}, {name : cat2}, {name: cat3}, {name: cat4}]
    dispatch(addCat(gameId, allCats))
    this.setState({ cat1: '', cat2: '', cat3: '', cat4: '' })
    
  }

  render() {
    const { cat1, cat2, cat3, cat4} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input 
            name='cat1'
            placeholder='Name'
            label='Category 1'
            value={cat1}
            onChange={this.handleChange}
          />
          <Form.Input 
            name='cat2'
            placeholder='Name'
            label='Category 2'
            value={cat2}
            onChange={this.handleChange}
          />
          <Form.Input 
            name='cat3'
            placeholder='Name'
            label='Category 3'
            value={cat3}
            onChange={this.handleChange}
          />
          <Form.Input 
            name='cat4'
            placeholder='Name'
            label='Category 4'
            value={cat4}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default connect()(CatForm)