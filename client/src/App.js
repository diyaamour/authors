import './App.css';

import { Link, Route, Routes, Navigate } from "react-router-dom";

import { NotFound } from './views/NotFound';
import { Authors } from './components/Authors';
import { Author } from './views/Author';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Authors/>} />
        <Route path="/authors/:id" element={<Author/>} />
        <Route path="*" element={<NotFound.js />} />
      </Routes>
    </div>
  );
}

export default App;
