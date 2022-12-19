import { Link } from "react-router-dom";

export const Match = ({ match }) => (
  <tr>
    <td>{match.date}</td>
    <td><Link to={{
        pathname: `/games/${match.id}`
      }} className="nav-link">
        {match.teams}
    </Link></td>
    <td>{match.time}</td>
  </tr>
);

