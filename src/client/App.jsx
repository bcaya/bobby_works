import React from "react";
import reactLogo from "./assets/react.svg";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Records from "./pages/Records";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="records" element={<Records/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App