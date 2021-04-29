import './App.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="Container">
    <div className="App-wrapper">
      <header className="App-header">
       Dictionary
      </header>
      <Dictionary />
    </div>
    <footer> <a href="https://github.com/lilylolo/react-dictionary-app" rel="noreferrer" target="_blank">Open-source</a> code by <a href="https://www.linkedin.com/in/lily-lo-9068aa12a" rel="noreferrer" target="_blank">Lily Lo</a></footer>
    </div>
  );
}

export default App;
