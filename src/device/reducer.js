const deviceReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DEVICE':
      console.log('reducer: add device');
      return {
        id: action.id,
        name: action.name,
      };
    case 'SHOW_DEVICE':
      console.log('reducer: show device');
      return {
        id: action.id
      };
    case 'SHOW_DEVICELIST':
      return {};
    default:
      return state;
  }
}

export default deviceReducer;
