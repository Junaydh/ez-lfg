import axios from 'axios';

export function handleClick() {
  axios.get('http://localhost:3000/test')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}



