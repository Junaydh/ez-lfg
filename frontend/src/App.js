import logo from './logo.svg';
import './App.css';
import { handleClick } from './hooks/test'

function App() {
  return (
    <div>
      <button onClick={handleClick}>Test Request</button>
      <h1>EZLFG</h1>
    </div>
  );
}


export default App;
