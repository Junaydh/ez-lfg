import axios from 'axios';

export function joinSession(userId, sessionId) {
  return axios.post(`http://localhost:3001/sessions/${sessionId}/users/${userId}`)
    .then(response => response.data)
    .catch(err => {
      console.error(err.message);
      return [];
    });
}
