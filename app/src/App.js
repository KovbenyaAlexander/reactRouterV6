import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import First from "./Pages/First";
import Second from "./Pages/Second";
import RandomContainer from "./Pages/RandomContainer";
import RandomId from "./Pages/RandomId";
import NotRandomId from "./Pages/NotRandomId";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />

        <Route path="/id" element={<RandomContainer />}>
          <Route path="test" element={<NotRandomId />} />
          <Route path=":id" element={<RandomId />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
