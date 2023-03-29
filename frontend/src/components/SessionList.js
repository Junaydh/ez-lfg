import './SessionList.scss';
import SessionListItem from './SessionListItem';

function SessionList({ sessions, userId }) {
  const sortedSessions = sessions.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const sessionCards = sortedSessions.map(session => (
    <SessionListItem key={session.id} session={session} userId={userId} />
  ));

  return (
    <div className="sessions-container">
      {sessionCards}
    </div>
  );
}

export default SessionList;
