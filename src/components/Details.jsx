import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const notes = useSelector(state => state.notesReducer.notes);

  return (
    <div className='bg-blue-500 w-80 px-6 py-4 text-white rounded-lg shadow-md'>
      <div className='space-y-2'>
        <p className='text-lg font-semibold'>Username: </p>
        <p className='text-lg'>Total Notes: {notes.length}</p>
      </div>
    </div>
  );
}

export default Details;
