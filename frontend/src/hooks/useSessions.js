import { useState, useEffect } from 'react';
import axios from 'axios';

export function useSessions(gameId) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:3001/sessions';
    if (gameId) {
      url = `http://localhost:3001/games/${gameId}/sessions`;
    }
    axios.get(url)
      .then(response => {
        const newSessions = response.data.map(session => {
          return axios.get(`http://localhost:3001/sessions/user/${session.creator_id}`)
            .then(response => {
              session.creator = response.data[0];
              return session;
            })
            .then(session => {
              return axios.get(`http://localhost:3001/sessions/session/${session.id}/users`)
                .then(response => {
                  session.users = response.data;
                  return session;
                });
            });
        });
        Promise.all(newSessions).then(sessionsWithCreatorAndUsers => {
          setSessions(sessionsWithCreatorAndUsers);
        });
      })
      .catch(err => {
        console.error(err.message);
      });
  }, [gameId]);

  return sessions;
}

