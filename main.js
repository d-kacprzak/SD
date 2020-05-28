import './styles.css';
import gravatarUrl from "./lib/gravatar-url";
import app from './lib/app'

(function (window) {
  app(window, document.querySelector('#root'))
})(window)

// variables
const list = document.querySelector('.gravatars');
const modalBackground = document.querySelector('.modal-bg');
const modalClosingIcon = document.querySelector('.close');
const modalClosingBtn = document.querySelector('.btn');
const modalBody = document.querySelector('.modal-body');
const newImg = window.document.createElement('img');
const link = window.document.createElement('a');

list.addEventListener('click', function (e) {
  if(e.target.nodeName === 'IMG'){
    e.target.classList.remove('is-highlighted');
    newImg.classList.add('is-highlighted');
    addContentToModalBody(e.target.getAttribute('src'));
    openModal();
  }
}, false);

// Events
modalClosingIcon.addEventListener('click', closeModal);
modalClosingBtn.addEventListener('click', closeModal);
modalBackground.addEventListener('click', outsideClick);

//function that opens the modal
function openModal() {
  modalBackground.style.display = 'flex';
}

// function closing modal
function closeModal() {
  modalBackground.style.display = 'none';
  newImg.classList.remove('is-highlighted');
  modalBody.removeChild(newImg);
}

//closing function if the user clicked after the modal
function outsideClick(e) {
  if(e.target === modalBackground){
    modalBackground.style.display = 'none';
    newImg.classList.remove('is-highlighted');
    modalBody.removeChild(newImg)
  }
}

function addContentToModalBody(target) {
  newImg.setAttribute('src', target);
  modalBody.appendChild(newImg);
  modalBody.appendChild(link);
  link.setAttribute('href', `${target}`);
  link.setAttribute('target', '_blank');
  const reg = /[a-z 0-9]{32}/mg;
  const result = target.match(reg);
  link.textContent = `${result}`
}