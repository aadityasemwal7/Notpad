import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../redux/features/noteSlice';

const Notes = () => {
  const notes = useSelector(state => state.notesReducer.notes); // Accessing the notes from Redux state
  const dispatch = useDispatch();

  const [editingIndex, setEditingIndex] = useState(null); // Track the note being edited
  const [editingText, setEditingText] = useState(""); // Track the input text while editing

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index)); // Dispatch delete action
  };

  const handleEditNote = (index, note) => {
    setEditingIndex(index); // Set the note index to edit
    setEditingText(note); // Pre-fill the input with the current note
  };

  const handleSaveEdit = (index) => {
    if (editingText.trim()) {
      dispatch(editNote({ index, newText: editingText })); // Dispatch edit action with new text
      setEditingIndex(null); // Exit edit mode after saving
    }
  };

  return (
    <div className='max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg'>
      {notes.length === 0 ? (
        <h3 className='text-center font-semibold text-blue-500'>No notes available!</h3>
      ) : (
        <ol className='space-y-4'>
          {notes.map((note, index) => (
            <div key={index} className="flex items-center space-x-4">
              {editingIndex === index ? (
                // Show input field if editing the current note
                <div className="flex-1">
                  <input
                    className='w-full p-2 border border-blue-200 rounded-lg bg-blue-50 text-blue-800 focus:outline-none focus:border-blue-400'
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                </div>
              ) : (
                // Show the note if not in edit mode
                <li className='flex-1 p-2 border border-blue-200 rounded-lg bg-blue-50 text-blue-800'>
                  {index + 1}: {note}
                </li>
              )}

              {editingIndex === index ? (
                // Show Save button during editing
                <button
                  onClick={() => handleSaveEdit(index)}
                  className='py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200'>
                  Save
                </button>
              ) : (
                // Show Edit button when not editing
                <button
                  onClick={() => handleEditNote(index, note)}
                  className='py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200'>
                  Edit
                </button>
              )}

              {/* Delete button */}
              <button
                onClick={() => handleDeleteNote(index)}
                className='py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200'>
                Delete
              </button>
            </div>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Notes;
