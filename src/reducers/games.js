import _ from 'lodash';

export default(state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_GAMES':
      console.log("things");
      const games = _.map(action.payload, game => {
        return {
          key: game.internal_name,
          name: game.full_name
        }
      })
      console.log(_.sortBy(state.concat(games), 'name'))
      return _.sortBy(state.concat(games), 'name');
    default:
      console.log("stuff");
      return state;
  }
};
