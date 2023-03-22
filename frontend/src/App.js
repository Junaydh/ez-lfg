import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import FilterBar from './components/Filterbar';
import { useSessions } from './hooks/useSessions';
import SessionList from './components/SessionList';

function App() {
  const sessions = useSessions();

  return (
    <main>
      <Navbar />
      <h1>EZLFG</h1>
      <div>
        <GamesList />
      </div>
      <div>
        <SessionList sessions={sessions} />
      </div>
    </main>
  );
}

export default App;
