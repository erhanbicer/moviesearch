export const getRandomMovie = () => {
  const randomNumber = Math.floor(Math.random() * movies.length);
  return movies[randomNumber];
};

const movies: string[] = [
  'Iron Man',
  'Ice Age',
  'Avengers',
  'The Godfather',
  'The Lord of the Rings',
  'Forrest Gump',
  'Gladiator',
  'Spider Man',
  'The Transporter',
];
