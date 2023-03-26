import './SessionList.scss';
import SessionListItem from './SessionListItem';

function SessionList({ sessions, userId, setSessions }) {
  const sessionCards = sessions.map(session => (
    <SessionListItem key={session.id} session={session} userId={userId} sessions={sessions} setSessions={setSessions} />
  ));

  return (
    <div className="sessions-container">
      {sessionCards}
    </div>
  );
}

export default SessionList;