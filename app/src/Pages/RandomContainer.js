import { Outlet } from "react-router-dom";

function RandomContainer() {
  return (
    <div className="Page">
      <h1>Outlet:</h1>
      <Outlet />
    </div>
  );
}

export default RandomContainer;
