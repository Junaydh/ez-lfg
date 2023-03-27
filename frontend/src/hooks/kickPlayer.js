import axios from 'axios';

export function kickPlayer(sessionId, userId) {
  return axios.delete(`http://localhost:3001/sessions/session/${sessionId}/kick/${userId}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};
