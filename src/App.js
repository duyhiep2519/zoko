import React from "react";
import { Home } from "./pages";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
