import "./App.css";
import React from "react";
import Navbar from "./assets/components/NavigationBar";
import EditEntry from "./assets/components/EditEntry"
import Showitem from "./assets/components/ListDisplay";
import Footer from "./assets/components/Footer";

function UpdatePage(){
  return (
    <div className="App">
      <Navbar />
      <EditEntry />
      <Showitem />
      <Footer />      
    </div>
  );
}

export default UpdatePage;
