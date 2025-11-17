import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/todo">To-do</Link>
      <Link to="logs">Logs</Link>
    </nav>
  );
}
