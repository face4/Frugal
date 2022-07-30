import './App.css';
import Form from './Form.js';
import BooksTable from './BooksTable.js';

function App() {
  return (
      <div className="App">
        <Form os="Android" />
        <Form os="iOS" />
        <div className='container'>
          <BooksTable />
        </div>
      </div>
  );
}

export default App;
