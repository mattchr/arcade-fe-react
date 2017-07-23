import axios from 'axios';

export function launchGame(game_key) {
  console.log(game_key)
  const url = `http://localhost:5000/api/v1/roms/play/${game_key}`
  const request = axios.get(url)

  return {
    type: 'LAUNCH_GAME',
    payload: {}
  }
}

export function addGames(games) {
  return {
    type: 'ADD_GAMES',
    payload: games
  }
}
