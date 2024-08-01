import "./App.css";
import React from "react";
import Navbar from "./assets/components/NavigationBar";
import EditEntry from "./assets/components/EditEntry"
import Showitem from "./assets/components/ListDisplay";
import Footer from "./assets/components/Footer";
import NewEntry from "./assets/components/NewEntry";

function UpdatePage(){
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
          <NewEntry />  
          <EditEntry />
        </div>
      <Showitem />
      <Footer />      
    </div>
  );
}

export default UpdatePage;
