export default function closet(state = {'show': false, 'items': []}, action) {
  switch(action.type) {
    case 'SHOW_CLOSET':
      return {'show': true, 'items': state.items};
    case 'HIDE_CLOSET':
      return {'show': false, 'items': state.items};
    case 'ADD_TO_CLOSET':
      return {'show': state.show,
              'items': [...state.items, action.insert]};
    case 'REMOVE_FROM_CLOSET':
      return {'show': state.show,
              'items': [...state.items.slice(0, action.index), 
                        ...state.items.slice(action.index + 1)]};
    default:
      return state;
  }
}