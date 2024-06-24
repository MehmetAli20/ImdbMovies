import React, { useState, useMemo } from 'react';
import useMovies from './useMovies';
import { useModal } from './useModal';

function App() {
  const { data: movies } = useMovies();
  const [genre, setGenre] = useState('All');
  const [searchInput, setSearchInput] = useState('');
  const { isOpen, selectedMovie, openModal, closeModal } = useModal();

  const filteredMovies = useMemo(() => {
    if (!movies) return;
    if (genre === 'All') {
      return movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          movie.description.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    return movies.filter(
      (movie) =>
        movie.genre.includes(genre) &&
        (movie.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          movie.description.toLowerCase().includes(searchInput.toLowerCase()))
    );
  }, [movies, genre, searchInput]);

  return (
    <>
      <div className='flex justify-center space-x-4 p-4'>
        <div className='flex gap-4 '>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('All')}>All</button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('Action')}>Action</button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('Sci-Fi')}>Sci-Fi</button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('Drama')}>Drama</button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('Adventure')}>Adventure</button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('Mystery')}>Mystery</button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('Biography')}>Biography</button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('Crime')}>Crime</button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('Thriller')}>Thriller</button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('History')}>History</button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => setGenre('Fantasy')}>Fantasy</button>
        </div>
      </div>

      <div className='flex justify-between items-center mx-10'>
        <h1 className=' text-3xl font-bold text-white border border-blue-700 bg-blue-700 rounded-md hover:shadow-shadow22 p-2'>{genre}</h1>
        <input
          type='text'
          placeholder='Search...'
          className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 '
          value={searchInput}
          onChange={(ev) => setSearchInput(ev.target.value)}
        />
      </div>

      <div className='grid grid-cols-5 gap-5 m-10'>
        {filteredMovies &&
          filteredMovies.map((movie) => (
            <div key={movie.id} className='flex flex-col' onClick={() => openModal(movie)}>
              <img className='rounded-xl hover:shadow-shadow22 cursor-pointer' src={movie.image} alt={movie.title} />
              <p className='text-center font-bold text-lg font-sans text-white'>{movie.title}</p>
            </div>
          ))}
      </div>

      {isOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
          <div className='bg-gray-400 p-4 rounded shadow-lg'>
            <h2 className='text-2xl font-bold mb-2'>{selectedMovie.title}</h2>
            <img className='rounded-lg size-1/6' src={selectedMovie.image} ></img> 
            <a className='font-bold text-red-800 text-border' href={selectedMovie.imdb_link}>Click to go to Official Movie Site</a>
            <h3 className='text-lg font-bold'> Information about movie: </h3>
            <p className='mb-4'>{selectedMovie.description}</p>
            
            <button onClick={closeModal} className='bg-blue-700 text-white px-4 py-2 rounded'>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
export default App