import menu from '../menu.json';
import menuCardsTpl from '../templates/menu-cards.hbs';
const listOfMenuItemsMarkUp = menuCardsTpl(menu);

const listOfMenu = document.querySelector('.js-menu');

listOfMenu.insertAdjacentHTML('beforeend', listOfMenuItemsMarkUp);
const ul = document.querySelectorAll('.tag-list');

function create() {
  const arrOfTags = menu.map(item => item.ingredients);

  ul.forEach((item, i) => {
    const helper = [];
    for (let j = 0; j < arrOfTags[i].length; j += 1) {
      helper.push(createTagItem(arrOfTags[i][j]));

      if (helper.length === arrOfTags[i].length) {
        item.insertAdjacentHTML('beforeend', helper.join(' '));
      }
    }
  });
}

function createTagItem(text) {
  return `<li class=tag-list__item>${text}</li>`;
}
create();
