import axios from 'axios';

export function createSession (preferenceDetails, userId) {
  axios.post(`http://localhost:3001/sessions/create/host/${userId}`, preferenceDetails)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};