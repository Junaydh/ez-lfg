import './App.scss';
import Navbar from './components/Navbar';
import { useSessions } from './hooks/useSessions';
import SessionList from './components/SessionList';

function App() {
  const sessions = useSessions();

  return (
    <main>
      <Navbar />
      <SessionList sessions={sessions} />
    </main>
  );
}

export default App;
