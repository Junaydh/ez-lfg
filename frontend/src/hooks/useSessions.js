import { useState, useEffect } from 'react';
import axios from 'axios';

export function useSessions(gameId, sessions, setSessions) {
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
        });
        Promise.all(newSessions).then(sessionsWithCreator => {
          setSessions(sessionsWithCreator);
        });
      })
      .catch(err => {
        console.error(err.message);
      });
  }, [gameId, setSessions]);

  return sessions;
}
