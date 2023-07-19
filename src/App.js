import './App.css';
import BookList from './comp/BookList';
import NavBar from './comp/NavBar';
import NewBookForm from './comp/NewBookForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BookList />
      <NewBookForm />
    </div>
  );
}

export default App;
