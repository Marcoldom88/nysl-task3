
import Submit from './Submit';
import Message from './Message';

export const CreateMessageBoard = ({ chats, user }) => {
  return (
    <main role="main" className="container bootdey.com message-board-container">
      <div className="message-board-title">
        <h3 className="">Message Board</h3>
      </div>
      <div className="">
        {Object.values(chats).map(message => <Message key={message.id} message={message} />)}
      </div>
      <Submit user={user} />
    </main>
  )
};




