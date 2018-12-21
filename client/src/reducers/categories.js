import axios from 'axios'

const CATS = 'CATS'

export const getCats = () => {
  return (dispatch) => {
    axios.get('/api/categories')
    .then( res => dispatch({ type: CATS, cats: res.data }))
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case CATS:
      return action.cats
    default:
      return state
  }
}
