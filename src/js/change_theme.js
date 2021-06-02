const changeInputEl = document.getElementById('theme-switch-toggle');
const body = document.body;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
checkLocalStorageInfo();
changeInputEl.addEventListener('change', onInputClick);

function onInputClick(event) {
  if (event) {
    document.body.classList.toggle(Theme.DARK);
    localStorage.setItem('theme', document.body.classList);
  }
}

function checkLocalStorageInfo() {
  const infoLocalStorage = localStorage.getItem('theme');
  if (infoLocalStorage === Theme.DARK) {
    changeInputEl.checked = true;
    body.classList = infoLocalStorage;
  }
}
