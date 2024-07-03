import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import UpdatePage from "./UpdatePage";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:id" element={<UpdatePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}