import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage} from "pages/home";
import {Nav} from "components/nav";


function App() {
   return (
      <Router>
         <Nav />
         <Routes>
            <Route path="/" element={<HomePage />} />
         </Routes>
      </Router>
   );
}

export default App;