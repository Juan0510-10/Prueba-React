import React from "react";
import Header from "./components/layouts/Header";
import Programs from "./components/layouts/Programs";
import Contact from "./components/layouts/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Programs />
      <Contact />
    </div>
  );
}

export default App;
