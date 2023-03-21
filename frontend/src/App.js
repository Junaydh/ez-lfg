import logo from './logo.svg';
import './App.css';
import { handleClick } from './hooks/test'

function App() {
  return (
    <button onClick={handleClick}>Test Request</button>
  );
}


export default App;
