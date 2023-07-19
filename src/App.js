import './App.css';
import BookList from './comp/BookList';
import NavBar from './comp/NavBar';
import NewBookForm from './comp/NewBookForm';
import { BookProvider } from './context/BookContext';

function App() {
  return (
    <div className="App">
      <BookProvider>
        <NavBar />
        <BookList />
        <NewBookForm />
      </BookProvider>
    </div>
  );
}

export default App;
