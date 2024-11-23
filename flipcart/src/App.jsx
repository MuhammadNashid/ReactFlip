import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Details from './components/Details';

function App() {
  const [search,setSearch]=useState("")
  console.log(search);
  

  return (
     <>
    <BrowserRouter>
      <Navbar setSearch={setSearch}/>
      <Routes>
        <Route  path="/" element={<Index search={search}/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;