import { leftArrowSvg, rigthArrowSvg } from './arrows-for-pagination';
import { filmSectionEl } from './refs';

const { filmsPagination } = filmSectionEl;

const maxVisibleBtns = 5;

const renderBtn = (value, caption = null, cls = null) =>
  `<button class="pag-button${cls ? ` ${cls}` : ''}" data-page="${value}">${
    caption || value
  }</button>`;

export function makePagination(totalPages, currentPage, callback) {
  if (totalPages < 1) {
    return;
  }
  const visibleButtons = Math.min(totalPages, maxVisibleBtns);
  let startButton = currentPage - Math.floor(maxVisibleBtns / 2);
  startButton = startButton < 1 ? 1 : startButton;
  startButton =
    startButton + visibleButtons > totalPages
      ? totalPages - visibleButtons + 1
      : startButton;

  const endButton = visibleButtons + startButton - 1;

  let buttons = '';

  buttons += renderBtn(currentPage - 1, leftArrowSvg, 'pag-button--arrow');

  if (window.innerWidth > 768) {
    if (startButton > 1) {
      buttons += renderBtn(1);
      if (startButton > 2) {
        buttons += `<span>…</span>`;
      }
    }
  }

  for (let page = startButton; page <= endButton; page++) {
    buttons += renderBtn(
      page,
      page,
      currentPage === page ? 'pag-button__current' : ''
    );
  }

  if (window.innerWidth > 768) {
    if (endButton < totalPages) {
      if (endButton < totalPages - 1) {
        buttons += `<span>…</span>`;
      }
      buttons += renderBtn(totalPages);
    }
  }

  buttons += renderBtn(currentPage + 1, rigthArrowSvg, 'pag-button--arrow');

  filmsPagination.innerHTML = buttons;

  const onClick = e => {
    const { page } = e.target.dataset;
    if (page >= 1 && page <= totalPages) {
      filmsPagination.removeEventListener('click', onClick);
      callback(Number(page));
    }
  };
  filmsPagination.addEventListener('click', onClick);
}
