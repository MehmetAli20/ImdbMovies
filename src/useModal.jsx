import { useState } from 'react';

export function useModal() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  return {
    selectedMovie,
    openModal: setSelectedMovie,
    closeModal: () => setSelectedMovie(null),
    isOpen: !!selectedMovie,
  };
}