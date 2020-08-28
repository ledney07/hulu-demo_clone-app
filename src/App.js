import React, { useState } from "react";
import "./App.css";
import Header from "./pages/header";
import Nav from "./pages/nav";
import Results from "./pages/result";
import requests from "./assests/request";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav setSelectedOption={setSelectedOption} />
        <Results selectedOption={selectedOption} />
      </header>
    </div>
  );
}

export default App;
