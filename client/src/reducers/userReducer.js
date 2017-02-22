export default function UserReducer(state = {'id': 2}, action) {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return Object.assign({}, action.user);
    default:
      return state;
  }
}