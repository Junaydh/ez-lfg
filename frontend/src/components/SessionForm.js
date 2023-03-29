import './SessionForm.scss';
import React, { useState, useContext } from 'react';
import { createSession } from '../hooks/createSession';
import { AuthContext } from '../contexts/auth';

const SessionForm = ({ setShowForm }) => {

    const { user } = useContext(AuthContext);

  const [preferenceDetails, setPreferenceDetails] = useState({
    game_id: 1,
    mic_required: false,
    max_players: 2,
    title: '',
    description: '',
    discord_link: '',
    platform: 'PC'
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPreferenceDetails(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event) => {
    if(user) {
      event.preventDefault();
      await createSession(preferenceDetails, user.id);
      setShowForm(false);
    } else {
      alert("Please sign in!")
    }
  };
  


  return (
    <div className='form-div'>
      {(
        <form className='session-form' onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={preferenceDetails.title} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Description:
            <input type="text" name="description" value={preferenceDetails.description} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Game ID:
            <input type="number" name="game_id" value={preferenceDetails.game_id} onChange={handleInputChange} />
          </label>
          <label>
            Mic Required:
            <input type="checkbox" name="mic_required" checked={preferenceDetails.mic_required} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Max Players:
            <input type="number" name="max_players" value={preferenceDetails.max_players} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Discord Link:
            <input type="text" name="discord_link" value={preferenceDetails.discord_link} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Create Session</button>
        </form>
      )}
    </div>
  );
};

export default SessionForm;
