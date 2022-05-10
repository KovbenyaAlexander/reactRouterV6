import { Link } from "react-router-dom";

function Home() {
  const randomInt = Math.random();

  return (
    <div className="Page">
      <h1>Home</h1>

      <p>Nested Routes</p>
      <ul>
        <li>
          <Link to={`/id/${randomInt}`}>
            Go to page with random id [id/:id]
          </Link>{" "}
        </li>

        <li>
          <Link to={`/id/test`}>Go to [id/test]</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
