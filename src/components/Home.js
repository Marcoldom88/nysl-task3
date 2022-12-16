import '../stylesheets/Home.css';


function Home() {
  
  
  return (
    <div className="home-container">
      <div className="table-container">
        <table className="announcement-table table table-light table-striped">
          <thead>
            <tr>
              <th colSpan={2}><h3>Upcoming Events</h3></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>August 4</td>
              <td>NYSL Fundraiser</td>
            </tr>
            <tr>
              <td>August 16</td>
              <td>Season Kick-off: Meet the Teams</td>
            </tr>
            <tr>
              <td>September 1</td>
              <td>First Game of the Season (Check Game Schedule for details)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="contact-container">
        <h3>Contact</h3>
        <p>Please email us at <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a></p>
        <p>We will reply to your email as soon as we can.</p>
      </div>
    </div>
  )
}

export default Home;