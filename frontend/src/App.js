import logo from './logo.svg';
import './App.css';
import { handleClick } from './components/Test.js'

function App() {
  return (
    <button onClick={handleClick}>Test Request</button>
  );
}


export default App;
