import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieData = {
      1: { title: 'Inception', description: 'A mind-bending thriller directed by Christopher Nolan.' },
      2: { title: 'Interstellar', description: 'A science fiction epic about space exploration.' },
      3: { title: 'The Dark Knight', description: 'A gripping superhero film directed by Christopher Nolan.' },
      4: { title: 'Avatar', description: 'A visually stunning film set on the planet Pandora.' },
      5: { title: 'The Matrix', description: 'A groundbreaking sci-fi action film about a dystopian future.' },
    };

    setMovie(movieData[id]);
  }, [id]);

  if (!movie) {
    return <div>Загружается...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="movie-details"
    >
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <button onClick={() => navigate(-1)} className="back-button">Назад</button>
    </motion.div>
  );
};

export default MovieDetails;
