function pagination(curStep) {
  let pagItems = document.querySelectorAll('.pag-num__page');
  let prev = document.querySelector('#prev');
  let next = document.querySelector('#next');
  let final = document.querySelector('#final');

  for (let i = 0; i < pagItems.length; i++) {
    pagItems[i].addEventListener('click', changePage);
  }

  if (prev) {
    prev.addEventListener('click', goPrev);
  }
  if (next) {
    next.addEventListener('click', goNext);
  }
  if (final) {
    final.addEventListener('click', goFinal);
  }


  switch (curStep) {
    case 1:
      prev.classList.add('not-active');
      for (let i = curStep; i < pagItems.length; i++) {
        pagItems[i].classList.add('not-active');
      }
      break;
    case 2:
      for (let i = curStep - 2; i >= 0; --i) {
        pagItems[i].classList.add('is-active');
      }
      for (let i = curStep; i < pagItems.length; i++) {
        pagItems[i].classList.add('not-active');
      }
      break;
    case 3:
      for (let i = curStep - 2; i >= 0; --i) {
        pagItems[i].classList.add('is-active');
      }
      for (let i = curStep; i < pagItems.length; i++) {
        pagItems[i].classList.add('not-active');
      }
      break;
    case 4:
      for (let i = curStep - 2; i >= 0; --i) {
        pagItems[i].classList.add('is-active');
      }
      for (let i = curStep; i < pagItems.length; i++) {
        pagItems[i].classList.add('not-active');
      }
      break;
    case final:

        break;
    default:
      console.log('check pagination');

  }

  function changePage(e) {
    let pagItem = e.target;
    let pagItemNum = pagItem.dataset.value;
    page.redirect('/step' + pagItemNum);
  }

  function goPrev() {
    prevStep = --curStep;
    page.redirect('/step' + prevStep);
  }

  function goNext() {
    nextStep = ++curStep;
    page.redirect('/step' + nextStep);
  }

  function goFinal() {
    page.redirect('/final');
  }


}
