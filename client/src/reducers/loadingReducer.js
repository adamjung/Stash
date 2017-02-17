export default function loadingReducer(state = false, action) {
  switch(action.type) {
    case 'START_LOADING':
      return true;
    case 'FINISHED_LOADING':
      return false;
    default:
      return state;
  }
}