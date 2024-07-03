import "./App.css";
import React from "react";
import Navbar from "./assets/components/NavigationBar";
import NewEntry from "./assets/components/NewEntry"
import Showitem from "./assets/components/ListDisplay";
import Footer from "./assets/components/Footer";
function HomePage(){
  return (
    <div className="App">
      <Navbar />
      <NewEntry />
      <Showitem />
      <Footer />      
    </div>
  );
}

export default HomePage;