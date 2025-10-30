import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* Navigation Bar Component would go here */}
    <nav style={{
      background: '#6A1B9A',
      padding: '10px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
      }}>
      <h1 style={{margin: 0, fontSize: '24px',}}>ZTA * CSULB</h1>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
