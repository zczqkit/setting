import About from './screens/About'
import Control from './screens/Control'
import WhatIsMotionInput from './screens/WhatIsMotionInput'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={ <About/>} />
      <Route path="/Control" element={ <Control/>} />
      <Route path="/WhatIsMotionInput" element={ <WhatIsMotionInput/>} />
    </Routes>
  </Router>
  );
}

export default App;
