import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGalleryEl = document.querySelector(".gallery");



const makeGalleryItem = ({ preview, original, description }) => {
  return `<a class="gallery__item" 
    href= ${original}>
  <img class="gallery__image" 
  src= ${preview} 
  alt= ${description} />
</a>`;
}

const makeGalleryItemMarkup = galleryItems.map(makeGalleryItem).join();

getGalleryEl.insertAdjacentHTML('afterbegin', makeGalleryItemMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.7,
});




