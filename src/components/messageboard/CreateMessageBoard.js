
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
  <div className="media pt-3">
    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
      <strong className="d-block">{message.author}</strong>
      <strong className="d-block">
        <ConvertTimestamp message={message} />
      </strong>
      {message.text}
    </p>
  </div>
);

const ConvertTimestamp = ({ message }) => (
  new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    .format(message.timestamp)
)


