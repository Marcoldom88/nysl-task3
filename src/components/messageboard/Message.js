
const Message = ({ message }) => (
  <div className="margin">
    <div className="message-card">
      <div className="message-header">
        <p>{message.author}</p>
        <p><ConvertTimestamp message={message} /></p>
      </div>
      <div className="message-body">
        <p>{message.text}</p>
      </div>
    </div>
  </div>
);

const ConvertTimestamp = ({ message }) => (
  new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    .format(message.timestamp)
)

export default Message;