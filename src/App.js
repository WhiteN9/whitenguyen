import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Layout />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
