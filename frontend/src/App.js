import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import { useSessions } from './hooks/useSessions';
import SessionList from './components/SessionList';

function App() {
  const sessions = useSessions();

  return (
    <main>
      <Navbar />
      <div>
        <GamesList />
      </div>
      <SessionList sessions={sessions} />
    </main>
  );
}

export default App;
