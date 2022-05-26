import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// import page
import Landing from './component/Landingpage';
import Skill from './component/Skill';

function App() {
  return (
  <div>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </Router>
    </div>
  </div>
  );
}

export default App;