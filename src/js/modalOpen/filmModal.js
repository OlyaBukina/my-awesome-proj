import { filmSectionEl } from '../common/refs';

function showModal(e) {
  const filmId = e.target.closest('li[data-id]').dataset.id;
  console.log(filmId);
}

function onFilmContainerClick(e) {
  e.preventDefault();
  if (e.currentTarget === e.target) {
    return;
  }
  showModal(e);
}

filmSectionEl.filmsList.addEventListener('click', onFilmContainerClick);
