import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  })
  .join('');

  galleryUl.insertAdjacentHTML("beforeend", galleryMarkup);

let modal = null;
const openModal = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

    modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );

  modal.show();
  document.addEventListener('keydown', closeModalByEscape);
};

const closeModalByEscape = (event) => {
  if (event.code !== 'Escape') return;
  modal.close();
  document.removeEventListener('keydown', closeModalByEscape);
};

galleryUl.addEventListener('click', openModal);