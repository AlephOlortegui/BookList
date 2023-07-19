import { useContext } from "react"
import { BookContext } from "../context/BookContext"

const BookDetails = ({book: {id,title,author}}) => {
  const {dispatch} = useContext(BookContext)
  return (
    <li onClick={() => dispatch({type: "REMOVE_BOOK", payload: id})}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  )
}

export default BookDetails