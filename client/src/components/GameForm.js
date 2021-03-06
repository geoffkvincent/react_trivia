import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import { addGame } from '../reducers/games'
import { Form } from 'semantic-ui-react'

class GameForm extends React.Component {
  state = { name: '', }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { name } = this.state
    const game = { name, }
    dispatch(addGame(game))
    this.setState({ name: '' })
    this.props.toggleForm()
  }

  render() {
    const { name } = this.state
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name='name'
            placeholder='Name'
            label='Game Name'
            value={name}
            onChange={this.handleChange}
            required
            />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Fragment>
    )
  }
}

export default connect()(GameForm)