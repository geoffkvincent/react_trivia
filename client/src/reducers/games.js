import axios from 'axios'

const GAMES = 'GAMES'
const ADD_GAME = 'ADDGAME'

export const getGames = () => {
  return (dispatch) => {
    axios.get('/api/games')
    .then( ({data}) => dispatch({ type: GAMES, games: data }))
  }
}

export const addGame = (game) => {
  return (dispatch) => {
    axios.get('/api/games', {game} )
    .then( ({data}) => dispatch({ type: ADD_GAME, game: data }))
  }
}

export default ( state = [], action) => {
  switch(action.type) {
    case GAMES:
    
  }
}