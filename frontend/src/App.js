import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdatePage from "./UpdatePage";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UpdatePage/>}/>
        <Route path="/:id" element={<UpdatePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}