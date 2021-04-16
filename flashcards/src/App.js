import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Hebrew Flash Cards</h1>
        <div className="cols">
          <Cards />
        </div>
        
      </div>
    </div>
  );
}

export default App;
