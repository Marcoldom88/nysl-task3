import { database } from '../../utilities/firebase';
import { useState } from 'react';
import { push, ref } from 'firebase/database';

const Submit = ({user}) => {
  const [message, setMessage] = useState();
  const handleSubmit= (e) => {
    push(ref(database, '/messages'),
      {
        id: Date.now(),
        author: user.email,
        text: message,
        timestamp: Date.now()
      });
      e.preventDefault();
    }
    return (
      <form className='messageInput' onSubmit={e => { handleSubmit(e) }}>
        <input type='text' className='chatInput' value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Leave here your message :)' />
        <input type='submit' className='submit' value='Send' />
      </form>
    )
  
}


export default Submit;

