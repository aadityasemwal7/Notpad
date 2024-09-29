import React from 'react';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
import Details from './components/Details';
import Heading from "./components/Heading";
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg ml-12">
        <div className="text-center mb-6">
          <Heading />
        </div>

        <div className="mb-6">
          <AddNote />
        </div>

        <div className="mb-6">
          <Notes />
        </div>

        <div className="mt-6">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
