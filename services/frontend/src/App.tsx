import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from 'components/layout/navbar/Navbar'
import Home from 'views/Home'
import ComposeSdk from 'views/ComposeSdk';
import EmbedSdk from 'views/EmbedSdk';
import DataModels from 'views/DataModels';


function App() {
  return (
    <div className="App">
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EmbedSdk" element={<EmbedSdk />} />
          <Route path="/ComposeSdk" element={<ComposeSdk />} />
          <Route path="/DataModels" element={<DataModels />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
