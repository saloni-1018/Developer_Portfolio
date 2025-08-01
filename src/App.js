import React from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      {/* New heading for auto-deploy test */}
      <h1 style={{ textAlign: "center", color: "blue" }}>
        Hello Sallu! 🚀 Site Updated via CI/CD
      </h1>
      <Main />
    </div>
  );
}

export default App;
