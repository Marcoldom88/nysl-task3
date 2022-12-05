import React, { useState, useEffect } from 'react';
import { Match } from './Match';


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

  const Title = ({matches})=> (
    <div>
    { Object.values(matches).map(match => <Match key={match.id} match={ match } />) }
    </div>
  );
  if (!games) return <h1>Loading schedule...</h1>;

  return (
      <Title matches={games.matches} />
    )
  
}; 



