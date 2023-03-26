import axios from 'axios';

export function getSessions() {
  return axios.get(`http://localhost:3001/sessions`)
    .then(response => {return response.data})
    .catch(err => {
      console.error(err.message);
      return [];
    });
}
