import axios from 'axios';

export function joinSession(userId, sessionId) {
  return axios.post(`http://localhost:3001/sessions/session/${sessionId}/users/${userId}`)
    .then(response => {
      if (response.data === null) {
        // user is already in the session
        return { status: 'already_joined' };
      } else {
        return { status: 'joined', data: response.data };
      }
    })
    .catch(err => {
      console.error(err.message);
      return { status: 'error' };
    });
}

export function leaveSession(userId, sessionId) {
  return axios.delete(`http://localhost:3001/sessions/session/${sessionId}/users/${userId}`)
    .then(response => {
      if (response.data === null) {
        // user is not in the session
        return { status: 'already_left' };
      } else {
        return { status: 'left', data: response.data };
      }
    })
    .catch(err => {
      console.error(err.message);
      return { status: 'error' };
    });
}
