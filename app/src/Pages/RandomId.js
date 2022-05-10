import { useParams } from "react-router-dom";

function RandomId() {
  const props = useParams();
  return (
    <div className="Page">
      <h1>useParams hook</h1>
      <p>data from url: {props.id}</p>
    </div>
  );
}

export default RandomId;
