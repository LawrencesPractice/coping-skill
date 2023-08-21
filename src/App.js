import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import DeepBreathing from './components/FocusTools/DeepBreathing';
import MuscleRelaxation from './components/muscleRelaxation/MuscleRelaxation';
import IrrationalThoughts from './components/irrationalThoughts/IrrationalThoughts';
// import other pages...

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deep-breathing" element={<DeepBreathing />} />
        <Route path="/muscle-relaxation" element={<MuscleRelaxation />} />
        <Route path="/irrational-thoughts" element={<IrrationalThoughts />} />

        {/* <Route path="/other-path" element={<OtherComponent />} /> */}
      </Routes>
    </Router>
  );
};

export default App;