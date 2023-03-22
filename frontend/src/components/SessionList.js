import './SessionList.scss';
import SessionListItem from './SessionListItem';

function SessionList({ sessions }) {
  const sessionCards = sessions.map(session => (
    <SessionListItem key={session.id} session={session} />
  ));

  return (
    <div className="sessions-container">
      {sessionCards}
    </div>
  );
}

export default SessionList;