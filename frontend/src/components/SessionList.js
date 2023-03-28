import './SessionList.scss';
import SessionListItem from './SessionListItem';

function SessionList({ gameCover, sessions, userId }) {
  const sessionCards = sessions.map(session => (
    <SessionListItem key={session.id} session={session} userId={userId} />
  ));

  if(gameCover) {
    document.body.style.cssText+=`background-image:url(${gameCover})`;
  } else {
    document.body.style.cssText+=`background-color: #282c34;`;
  }

  return (
    <div className="sessions-container">
      {sessionCards}
    </div>
  );
}

export default SessionList;