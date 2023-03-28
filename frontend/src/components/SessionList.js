import './SessionList.scss';
import SessionListItem from './SessionListItem';

function SessionList({ sessions, userId }) {
  if (!sessions || sessions.length === 0) {
    return <div>Loading sessions...</div>;
  }

  const sessionCards = sessions.map(session => (
    <SessionListItem key={session.id} session={session} userId={userId} />
  ));

return (
  <div className="sessions-container">{sessionCards}</div>
);
}


export default SessionList;