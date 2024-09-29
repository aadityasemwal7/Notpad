import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/features/noteSlice';

const AddNote = () => {
  const dispatch = useDispatch();
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (noteText.trim()) {
      dispatch(addNote(noteText));
      setNoteText(""); // Clear input after adding note
    }
  };

  return (
    <div className='flex items-center'>
      <input 
        className='flex-1 px-4 py-2 border-2 border-gray-400 rounded-lg focus:border-blue-500 focus:outline-none' 
        type="text" 
        placeholder="Add your note here!" 
        value={noteText} 
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button 
        onClick={handleAddNote} 
        className='ml-3 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200' 
        type="submit"
      >
        Add
      </button>
    </div>
  );
}

export default AddNote;
