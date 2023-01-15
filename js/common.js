const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');
const searchIcon = searchEl.querySelector('.material-icons');

searchIcon.addEventListener('click',(e) => {
  searchInput.focus();
  searchInput.setAttribute('placeholder','통합검색');
  e.target.classList.add('zeroOpacity');
});

searchInput.addEventListener('blur',(e) => {
  e.target.setAttribute('placeholder', '');
  searchIcon.classList.remove('zeroOpacity');
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();