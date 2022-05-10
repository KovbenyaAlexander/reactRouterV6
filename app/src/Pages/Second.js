import { useNavigate } from "react-router-dom";

function Second() {
  const navigate = useNavigate();

  const onClickHamdler = () => {
    navigate("/");
  };

  return (
    <div className="Page">
      <h1>Second</h1>
      <button onClick={onClickHamdler}>useNavigate '/'</button>
    </div>
  );
}

export default Second;
