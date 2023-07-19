const BookReducer = (state,action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        action.payload
      ]
    case 'REMOVE_BOOK':
        return state.filter(book => book.id !== action.payload); 
    default:
      return state
  }
}

export default BookReducer