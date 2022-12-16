import SimpleDateTime from 'react-simple-timestamp-to-date';
import Submit from './Submit';

export const CreateMessageBoard = ({ chats, user }) => {
  
  return (
    <main role="main" className="container bootdey.com message-board-container">
      <div className="">
        <div className="">
          <h3 className="">Message Board</h3>
        </div>
      </div>
      <div className="my-3 p-3 rounded">
        {Object.values(chats).map(message => <Message key={message.id} message={message} />)}
      </div>
      <Submit user={user} />
    </main>
  )
};

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




