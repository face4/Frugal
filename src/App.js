import './App.css';
import Title from './Title';
import PointForms from './PointForms';
import BookForm from './BookForm';
import BooksData from './BooksData'
import BooksTable from './BooksTable';

function App() {
  return (
      <div className="App">
        <Title />
        <hr/>
        
        <PointForms />
        <hr/>
        
        <h1>Books</h1>
        <BookForm />
        <BooksTable data={BooksData}/>
      </div>
  );
}

export default App;
