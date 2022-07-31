import './App.css';
import Title from './Title';
import PointForms from './PointForms';
import Books from './Books'
import Executor from './Executor';
import Results from './Results';

function App() {
  return (
    <div className="App">
      <Title />
      <hr />

      <PointForms />
      <hr />

      <Books />

      <Executor />

      <Results />
    </div>
  );
}

export default App;
