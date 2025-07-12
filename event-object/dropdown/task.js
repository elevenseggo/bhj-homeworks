document.querySelectorAll('.dropdown').forEach(dropdown => {
  const button = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  const items = dropdown.querySelectorAll('.dropdown__item');

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    document.querySelectorAll('.dropdown__list').forEach(otherList => {
      if (otherList !== list) {
        otherList.classList.remove('dropdown__list_active');
      }
    });
    list.classList.toggle('dropdown__list_active');
  });

  items.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      button.textContent = item.textContent;
      list.classList.remove('dropdown__list_active');
    });
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown__list').forEach(list => {
    list.classList.remove('dropdown__list_active');
  });
});