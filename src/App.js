import About from './screens/About'
import Control from './screens/Control'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={ <About/>} />
      <Route path="/Control" element={ <Control/>} />
    </Routes>
  </Router>
  );
}

export default App;
