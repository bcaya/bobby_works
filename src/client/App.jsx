import React from "react";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Records from "./pages/Records";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import RecordDetailPage from "./pages/RecordDetails";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/records" element={<Records/>}/>
              <Route path="/records/:id" element={<RecordDetailPage/>}/>
    
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App