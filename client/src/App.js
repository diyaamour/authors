import './App.css';

import {  Route, Routes } from "react-router-dom";

import { NotFound } from './views/NotFound';
import { Authors } from './components/Authors';
import { Author } from './views/Author';
import { EditAuthor } from './views/EditAuthor';
import { AddAuthor } from './views/AddAuthor';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Authors/>} />
        <Route path="/authors/:id" element={<Author/>} />
        <Route path='/authors/new' element={<AddAuthor />}/>
        <Route path="/authors/:id/edit" element={<EditAuthor/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
