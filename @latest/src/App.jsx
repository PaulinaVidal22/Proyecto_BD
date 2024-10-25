import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import './App.css'
import "bulma/css/bulma.min.css";

function App() {


  return (
      <Router>
        <Routes>
          <Route path="/*" element={<Navigate replace to="/home" />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Router>
  )
}

export default App
