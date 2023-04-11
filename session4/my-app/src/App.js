import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>One of my hobbies is: Crocheting</h2>
        <p>You will need:</p>
        <ul>
          <li>Crochet hook</li>
          <li>Wool</li>
          <li>Scissors</li>
          <li>Tape Measure</li>
        </ul>
        <p>I enjoy crocheting as it is a way to relax, I enjoy being creative and I love creating things I can use or wear.</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save.
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
