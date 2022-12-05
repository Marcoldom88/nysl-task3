import React, { useState, useEffect } from 'react';
import { Match } from './Match';
import '../stylesheets/Schedule.css'


export const Schedule = () => {
  const [games, setGames] = useState();
 
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('games.json');
      if (!response.ok) throw response;
      const json = await response.json();
      setGames(json);
    }
    fetchGames();
  }, []);

  const CreateGamesTable = ({ matches }) => (
  
  <div className="games-container">
        <table className="games-table table">
          <thead>
            <tr>
              <th colSpan={3}><h3>Upcoming Games</h3></th>
            </tr>
            <tr>
              <th>Teams</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            { Object.values(matches).map(match => <Match key={match.id} match={ match } />) }
          </tbody>
        </table>
      </div>
    
  );
  if (!games) return <h1>Loading schedule...</h1>;

  return (
    <CreateGamesTable matches={games.matches} />
         
    )
  
}; 



