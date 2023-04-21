export function getGenres(genresIds, allGenres) {
  const filmGenres = allGenres
    .filter(genre => genresIds.includes(genre.id))
    .map(genre => genre.name);

  if (filmGenres.length > 2) {
    return `${filmGenres.slice(0, 2).join(', ')} , Others`;
  }

  return filmGenres.join(', ');
}
