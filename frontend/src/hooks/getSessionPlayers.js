import axios from 'axios';

export function getSessionPlayers(sessionId) {
  return axios.get(`http://localhost:3001/sessions/session/${sessionId}/users`)
    .then(response => response.data)
    .catch(err => {
      console.error(err.message);
      return [];
    });
}
