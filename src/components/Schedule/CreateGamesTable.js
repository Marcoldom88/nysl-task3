import { Match } from './Match';

const CreateGamesTable = ({ matches }) => (
    <div className="schedule-container">
      <table className="schedule-table table">
        <thead>
          <tr>
            <th colSpan={3}><h3>Upcoming Games</h3></th>
          </tr>
          <tr>
            <td colSpan={3}>Click on each game for further information</td>
          </tr>
          <tr>
            <th>Date</th>
            <th>Teams</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
            { Object.values(matches).map(match => <Match key={match.id} match={ match } />) }
        </tbody>
      </table>
    </div>
);
  
export default CreateGamesTable;