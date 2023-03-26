import axios from 'axios';

export function createSession (preferenceDetails) {
  const userId = 8; // Replace with your actual user ID
  axios.post(`/sessions/create/host/${userId}`, preferenceDetails)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};