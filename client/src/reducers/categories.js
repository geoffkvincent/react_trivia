import axios from 'axios'

const CATS = 'CATS'

export const getCats = () => {
  debugger
  return (dispatch) => {
    axios.get('/api/categories')
    .then( res => dispatch({ type: CATS, cats: res.data }))
    debugger
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case CATS:
    debugger
      return action.cats
    default:
      return state
  }
}
