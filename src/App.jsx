import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './Home';
import './App.css';
import AddBookForm from './components/AddBookForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBookForm />} />
      </Routes>
    </div>
  );
}

export default App;