import './App.css';
import Title from './Title';
import PointForms from './PointForms';
import Books from './Books'
import BooksProvider from './BooksProvider';

function App() {
  return (
    <div className="App">
      <Title />
      <hr />

      <PointForms />
      <hr />

      <BooksProvider>
        <Books />
      </BooksProvider>
    </div>
  );
}

export default App;
