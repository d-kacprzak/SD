export default function (window, text) {
  const headerElem = window.document.createElement('header')
  const titleElem = window.document.createElement('h1')
  titleElem.innerText = text || 'Facewall'

  headerElem.appendChild(titleElem)

  window.addEventListener('DOMContentLoaded', (e) => {

    const h1 = document.querySelector('h1');
    const topToh1 = h1.offsetTop;
    const header = document.querySelector('header');

    function stickyNav(){
      (window.scrollY >= topToh1)
          ? header.classList.add('fixed')
          : header.classList.remove('fixed');
    }

    window.addEventListener('scroll', stickyNav);

  });

  return headerElem
}
