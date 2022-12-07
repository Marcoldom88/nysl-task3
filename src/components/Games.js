import React, { useState, useEffect } from 'react';
import { Component } from './Match';


export const Games = () => {
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
  
  let id = <Component />;

  let match = games.matches;

  if (match.id === id) {

  const CreateGamesDetails = ({ match, locations }) => (  
    
    <div className='game-container'>
      <div className=''>
          {match.id} {match.time} {match.location} 
      </div>
    </div>
    )
    return (
      <CreateGamesDetails matches={games.matches} location={games.locations} />
      )
  }
};
