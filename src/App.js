import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes className="routes">
        <Route path="/" className="route">
          <Layout />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
