export default(state = [], payload) => {
  return [
      {
        key: 'dkong',
        name: 'Donkey Kong'
      },
      {
        key: 'umk3',
        name: 'Ultimate Mortal Kombat 3'
      },
      {
        key: 'sfa',
        name: 'Street Fighter 3'
      }
  ];
    // switch (payload.type) {
    //     case 'add':
    //         return [...state, payload.item];
    //     default:
    //         return state;
    // }
};
