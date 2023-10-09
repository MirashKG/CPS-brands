const item = document.querySelectorAll('.brands__item');
const btnShow = document.querySelector('.show-btn');

const windowWidth =  window.innerWidth;

function windowBrowser () {
  let x;
  if (1080 <= windowWidth) {
    x = 8
  } else if (768 <= windowWidth) {
    x = 6
  }else if (320 <= windowWidth) {
    x = 4
  }
  else if (320 >= windowWidth) {
    x = item.length
  }
  return x
}

function showVisible(visible) {

  if (windowWidth > 320) {
    for (let i = windowBrowser(); i < item.length; i++) {
      item[i].style.display = i < visible ? 'flex' : 'none';
    }
  }
}

let visible = windowBrowser();
let allCard = item.length - visible;
showVisible(visible);

btnShow.addEventListener('click', () => {
	btnShow.classList.toggle('show-btn_active')
  if (btnShow.textContent == 'Показать все') {
    btnShow.textContent = 'Cкрыть';
    visible += allCard
  } else if (btnShow.textContent == 'Cкрыть') {
    btnShow.textContent = 'Показать все';
    visible -= allCard
  }
  showVisible(visible);
});

