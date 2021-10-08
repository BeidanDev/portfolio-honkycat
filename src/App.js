import React from 'react';

import './App.css';

import { CenterImage } from './components/CenterImage';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <CenterImage />
      <h2>Hola Mundo</h2>
    </>
  );
}

export default App;