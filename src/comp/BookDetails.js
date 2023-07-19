const BookDetails = ({book}) => {
  return (
    <li>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  )
}

export default BookDetails