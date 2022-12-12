import React, { useState, useEffect } from 'react';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import '../stylesheets/MessageBoard.css';
import { useList } from 'react-firebase-hooks/database';

export const MessageBoard  = () => {
const [messages, setMessages] = useState();

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('messages.json');
      if (!response.ok) throw response;
      const json = await response.json();
      setMessages(json);
    }
    fetchGames();
  }, []);
 
  if (!messages) return <h1>Loading message board...</h1>;
  
   
  return (
    <CreateMessageBoard chats={messages} /> 
  )
}

const CreateMessageBoard = ({ chats }) => (
    <main role="main" className="container bootdey.com message-board-container">
      <div className="">
        <div className="">
          <h3 className="">Message Board</h3>
        </div>
      </div>
      <div className="my-3 p-3 rounded">
         { Object.values(chats).map(message => <Message key={message.id} message={message} />) }
      </div>
    </main>
);

const Message = ({ message }) => (
  <div className="media text-muted pt-3">
    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
      <strong className="d-block text-gray-dark">{message.author}</strong>
      <strong className="d-block text-gray-dark">
        <SimpleDateTime dateSeparator="/" timeSeparator=":" dateFormat="DMY" timeFormat="HMS">{message.timestamp}</SimpleDateTime>
      </strong>
      {message.text}
    </p>
  </div>
);


