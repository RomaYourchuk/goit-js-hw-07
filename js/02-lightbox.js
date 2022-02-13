import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

const createGalleryItemMarkup = ({ preview, original, description }) => {
    return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
}

const createGalleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');

galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup);

let galleryEl = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
