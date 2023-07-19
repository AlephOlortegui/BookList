import {createContext, useEffect, useReducer} from 'react'
import BookReducer from './BookReducer'

export const BookContext = createContext()

export const BookProvider = ({children}) => {

  const [books, dispatch] = useReducer(BookReducer, [], ()=>{
    let LS_books = localStorage.getItem('books')
    return LS_books ? JSON.parse(LS_books) : []
})

  useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{
      books,
      dispatch
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
