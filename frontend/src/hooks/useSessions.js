import { useState, useEffect } from 'react';
import axios from 'axios';

export function useSessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/sessions')
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
        Promise.all(newSessions).then(sessionsWithCreator => {
          setSessions(sessionsWithCreator);
        });
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  return sessions;
}
