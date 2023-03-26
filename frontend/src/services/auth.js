const API_URL = 'http://localhost:3001/api/'; // Replace with your server's API URL

async function register(username, password, email) {
  const response = await fetch(`${API_URL}register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, email }),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  const user = await response.json();
  return user;
}

async function login(username, password) {
  const response = await fetch(`${API_URL}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  console.log(response)
  if (!response.ok) {
    throw new Error('Login failed');
  }

  const user = await response.json();
  return user;
}

async function logout() {
  const response = await fetch(`${API_URL}logout`, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Logout failed');
  }
}

export { register, login, logout };