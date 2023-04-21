import { headerEl } from './common/refs';
import { getTrendingFilms } from './getTrendingFilms';
import { getSearchedFilms } from './getSearchedFilms';

import { filmSectionEl } from './common/refs';
// Header refs
const { homeBtn, libraryBtn, searchForm, libraryButtons, logoEl, searchInput } =
  headerEl;

export let queryVal = '';

// Functions for header

function onLibraryBtnClick() {
  libraryBtn.classList.add('current-btn');
  homeBtn.classList.remove('current-btn');
  libraryButtons.classList.remove('visually-hidden');
  searchForm.classList.add('visually-hidden');
  logoEl.classList.add('header-logo--library');
}

function onHomeBtnClick() {
  homeBtn.classList.add('current-btn');
  libraryBtn.classList.remove('current-btn');
  libraryButtons.classList.add('visually-hidden');
  searchForm.classList.remove('visually-hidden');
  logoEl.classList.remove('header-logo--library');
  // searchInput.value = '';
  // queryVal = '';
  // getTrendingFilms(1);
  window.location.reload();
}

function onFormSubmit(e) {
  e.preventDefault();
  queryVal = e.currentTarget.elements.searchQuery.value;
  getSearchedFilms(1);
}

searchForm.addEventListener('submit', onFormSubmit);
libraryBtn.addEventListener('click', onLibraryBtnClick);
homeBtn.addEventListener('click', onHomeBtnClick);
