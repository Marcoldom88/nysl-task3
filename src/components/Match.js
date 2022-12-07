import { Link, useSearchParams } from "react-router-dom";

export const Match = ({ match }) => (
  <tr>
    <td>{match.date}</td>
    <td><Link to={{
        pathname: "/games",
        search: `?id=${match.id}`
      }} className="nav-link">
        {match.teams}
    </Link></td>
    <td>{match.time}</td>
  </tr>
);

export const Component = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return id;
}