import './SessionListItem.scss';

function SessionListItem({session}) {

  const date = new Date(session.created_at);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });

  return (
    <div key={session.id} className="session-card">
      <h2>{session.title}</h2>
      <h3>Host: {session.creator.username}</h3>
      <h5>Discord: {session.creator.discord_tag}</h5>
      <div className='session-prefs-description'>  
        <div className='preferences'>
          <span>Players: 2/{session.max_players}</span>
          <span>Mic Required: {session.mic_required ? 'Yes' : 'No'}</span>
        </div>
        <p>{session.description}</p>
      </div>
      <span>{formattedDate}</span>
    </div>
  );
}

export default SessionListItem;
