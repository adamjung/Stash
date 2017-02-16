export default function currentReducer(state = {'name': '', 'items':[]}, action) {
  switch(action.type) {
    case 'UPDATE_CURRENT_SITE':
      return Object.assign({}, {'name': action.site, 'items': action.items});
    default:
      return state;
  }
}