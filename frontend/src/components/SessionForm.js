import './SessionForm.scss';
import React, { useState, useEffect, useContext } from 'react';
import { createSession } from '../hooks/createSession';
import axios from 'axios';
import { AuthContext } from '../contexts/auth';

const SessionForm = ({ setShowForm }) => {
  const [gamesDropdown, setGamesDropdown] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/games')
      .then(response => {
        setGamesDropdown(response.data);
      })
      .catch(error => console.log('Error fetching games:', error));
  }, []);

      const { user } = useContext(AuthContext);

    const [preferenceDetails, setPreferenceDetails] = useState({
      game_id: 1,
      mic_required: false,
      max_players: 2,
      title: '',
      description: '',
      platform: 'PC',
      region: 'Global',
      competitive: false 
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
              Game:
              <select name="game_id" value={preferenceDetails.game_id} onChange={handleInputChange}>
                <option value="">Select a game</option>
                {gamesDropdown.map(game => (
                  <option key={game.id} value={game.id}>{game.name}</option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Region:
              <select name="region" value={preferenceDetails.region} onChange={handleInputChange}>
                <option value="NA">NA</option>
                <option value="EUW">EUW</option>
                <option value="SEA">SEA</option>
                <option value="LAN">LAN</option>
              </select>
            </label>
            <br />
            <label>
              Max Players:
              <input type="number" name="max_players" value={preferenceDetails.max_players} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Mic Required:
              <input type="checkbox" name="mic_required" checked={preferenceDetails.mic_required} onChange={handleInputChange} />
            </label>
            <label>
              Playstytle:
              <input type="checkbox" name="competitive" checked={preferenceDetails.competitive} onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Create Session</button>
          </form>
      </div>
    );  
  };

export default SessionForm;
