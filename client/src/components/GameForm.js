import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addGame } from '../reducers/games'
import { Form } from 'semantic-ui-react'

class GameForm extends React.Component {
  state = { name: '' }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault()
    const { dispatch } = this.props
    const { name } = this.state
    const game = { name, }
    dispatch(addGame(game))
    // return <Redirect to="/game" />
  }

  render() {
    const { name } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          placeholder='Name'
          label='Game Name'
          value={name}
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default connect()(GameForm)