import {createContext, useReducer} from 'react'
import BookReducer from './BookReducer'

export const BookContext = createContext()

export const BookProvider = ({children}) => {
  const [books, dispatch] = useReducer(BookReducer, [])

  return (
    <BookContext.Provider value={{
      books
    }}>
      {children}
    </BookContext.Provider>
  )
}

// BOOk PROVIDER WITHOUT REDUCER....
/* export const BookProvider = ({children}) => {
    const [books, setBooks] = useState([])

    const addBook = (title,author) => {
        setBooks([
            ...books, {
                id:nanoid(),
                title,
                author
            }
        ])        
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    

    return (
        <BookContext.Provider value={{
            books,
            addBook,
            removeBook
        }}>
            {children}
        </BookContext.Provider>
    )
} */
