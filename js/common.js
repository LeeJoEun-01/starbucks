const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  //Logic
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색'); //attribute는 css의 속성
});
//포커스 한 번 한 이후에 placeholder의 글자가 사라지지 않아서 알아서 사라지는 핸들러를 만들어 줌 / blur: 포커스 해제
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

//footer
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear() //년도