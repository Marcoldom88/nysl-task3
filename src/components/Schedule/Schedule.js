import React, { useState, useEffect } from 'react';
import CreateGamesTable from './CreateGamesTable';
import '../../stylesheets/Schedule.css'



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


  if (!games) return
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>

  return (
    <CreateGamesTable matches={games.matches} />   
  )
  
}; 

  



