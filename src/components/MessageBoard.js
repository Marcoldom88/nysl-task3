import React from 'react';
import '../stylesheets/MessageBoard.css';
import { useData } from '../utilities/firebase';
import { CreateMessageBoard } from './CreateMessageBoard';


export const MessageBoard = () => {
//code for using FETCH from local JSON
/*const [messages, setMessages] = useState();

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('../messages.json');
      if (!response.ok) throw response;
      const json = await response.json();
      setMessages(json);
    }
    fetchMessages();
  }, []);
 
  if (!messages) return <h1>Loading message board...</h1>;
  
   
  return (
    <CreateMessageBoard chats={messages} /> 
  )*/
//code for Firebase Database access
  const [messages, loading, error] = useData('/messages'); 
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the message board...</h1>
  
  return (
   <CreateMessageBoard chats={messages} />
  );

}



