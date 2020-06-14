export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_SCHOOL': 
      return [
        ...state,
        action.payload
      ]
    break;
    default: return state
  }
}