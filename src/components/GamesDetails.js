import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../stylesheets/GamesDetails.css'


export const CreateGamesDetails = () => {
  const [games, setGames] = useState();
  const params = useParams();

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('../games.json');
      if (!response.ok) throw response;
      const json = await response.json();
      setGames(json);
    }
    fetchGames();
  }, []);
 
  if (!games) return <h1>Loading details...</h1>;
  
  const filteredMatch = Object.values(games.matches).filter((match) => match.id === params.id);
  const date = Array.from(filteredMatch).map((x) => x = x.date);
  const teams = Array.from(filteredMatch).map((x) => x = x.teams);
  const time = Array.from(filteredMatch).map((x) => x = x.time);
  const locationID = Array.from(filteredMatch).map((x) => x = x.game_location);
  const sites = Object.values(games.locations)
  // eslint-disable-next-line eqeqeq
  const filteredLocation = Array.from(sites).filter((x) => x.id == locationID);
  const location = Array.from(filteredLocation).map((x) => x = x.location_name);
  const address = Array.from(filteredLocation).map((x) => x = x.address);
  const googleUrl = Array.from(filteredLocation).map((x) => x = x.google_url);
  
  return (
      <div className='game-container'>
        <div className='details-container'>
          <h3>Game's Details</h3>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong>   {time}</p>
          <p><strong>Teams:</strong> {teams}</p>
        </div>
        <div className='location-container'>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Map:</strong></p>
          <iframe title={locationID} src={googleUrl} width="350" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
  
  )
  
 
}