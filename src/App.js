import React from "react";
import Compo from "./component/compo";

function App() {
  return (
    <div className="container-fluid row">
      <Compo color="red" />
      <Compo color="blue" />
      <Compo color="yellow" />
    </div>
  );
}

export default App;
