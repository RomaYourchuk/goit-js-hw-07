import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")
const cardsMarkup = createGalleryMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)


function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description })=> {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`
        }).join('')
    
}

// import basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     width="800" height="600">
// `)

// instance.show()





