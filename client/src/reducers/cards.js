import axios from 'axios'

const CARDS = 'CARDS'

export const getCards = (id) => {
  return (dispatch) => {
    axios.get(`/api/categories/${id}/cards`)
      .then( res => dispatch({ type: CARDS, cards: res.data }))
  }
}

export const answerCheck = () => {
  debugger
  const {cards} = this.props
  const {userAnswer, currentId } = this.state
  const check = cards.find(card => card.id === currentId)
  debugger
  if (check.correct_answer === userAnswer) {
    debugger
    console.log('Winner')
  } else {
    console.log('Loser')
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case CARDS:
      return action.cards
    default:
      return state
  }
}
