import { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import {nanoid} from 'nanoid'

const NewBookForm = () => {
  const {dispatch} = useContext(BookContext)

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {title, author, id: nanoid()}
    console.log(newBook)
    dispatch({type: "ADD_BOOK", payload: newBook})
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="book title" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="author name" value={author}
        onChange={(e) => setAuthor(e.target.value)} required />
      <input type="submit" value="add book" />
    </form>
  )
}

export default NewBookForm