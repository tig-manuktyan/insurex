import React from "react";
import { Routes, Route } from "react-router-dom";
import Loggedin from './../pages/LoggedIn/App'
import Registration from "../pages/Registration/App";
import './../css/global.scss';
import './styles.scss';

const App = () => 
    <div className="App">
      <Routes>
        <Route path="/" element={<Loggedin />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>

export default App;
