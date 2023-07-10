import React, { useState } from 'react';
import About from './screens/About'
import Control from './screens/Control'
import WhatIsMotionInput from './screens/WhatIsMotionInput'
import StartGame from './screens/StartGame'
import StartGameMotionInput from './screens/StartGameMotionInput'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={ <About/>} />
      <Route path="/Control" element={ <Control/>} />
      <Route path="/WhatIsMotionInput" element={ <WhatIsMotionInput/>} />
      <Route path="/Start" element={ <StartGame/>} />
      <Route path="/StartMotionInput" element={ <StartGameMotionInput/>} />
    </Routes>
  </Router>
  );
}

export default App;
