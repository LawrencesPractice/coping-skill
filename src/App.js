import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import IrrationalThoughts from './components/irrationalThoughts/IrrationalThoughts';
import IntroComponent from './components/intro/Intro';
import Footer from './components/footer/footer';
import ExploreComponent from './components/explore/explorePage/explorePage';
import InnerCalmExercise from './components/explore/InnerCalmExercise/InnerCalmExercise';
// import other pages...

const App = () => {
  return (
    <Router>
      <Navigation/>

      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/explore" element={<ExploreComponent />} />
        <Route path="/innerCalmExercise" element={<InnerCalmExercise />} />
        <Route path="/about" element={<IntroComponent />} />
        <Route path="/irrational-thoughts" element={<IrrationalThoughts />} />

        {/* <Route path="/other-path" element={<OtherComponent />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;