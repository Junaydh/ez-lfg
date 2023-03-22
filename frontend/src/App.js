import logo from './logo.svg';
import './App.scss';
import { handleClick } from './hooks/test'
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import FilterBar from './components/Filterbar';

function App() {
  return (
    <main>
      <Navbar />
      <button onClick={handleClick}>Test Request</button>
      <h1>EZLFG</h1>
      <div>
        <GamesList />
      </div>
      <div>
        <FilterBar />
      </div>
    </main>
  );
}


export default App;
