import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGalleryEl = document.querySelector(".gallery");
const itemMarkup = makeGalleryItemMarkup(galleryItems);
getGalleryEl.insertAdjacentHTML("beforeend", itemMarkup);
getGalleryEl.addEventListener("click", selectImage);

function makeGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
};

function selectImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();

    if (instance.visible()) {
        getGalleryEl.addEventListener('keydown', (e) => {
            if (event.code === 'Escape') {
                instance.close()
            }
        }
        );
    };
}

// const pictureContainer = document.querySelector('.gallery')
// const pictureMarkup = createPictureCardMarkup(galleryItems);
// pictureContainer.insertAdjacentHTML("beforeend", pictureMarkup)
// pictureContainer.addEventListener('click', onPictureShowModalClick);

// function createPictureCardMarkup(galleryItems) {
//     return galleryItems.map(({ preview, original, description }) => {
//         return `<div class="gallery__item">
//             <a class="gallery__link" href="${original}">
//                 <img
//                     class="gallery__image"
//                     src="${preview}"
//                     data-source="${original}"
//                     alt="${description}"
//                 />
//             </a>
//         </div>`
//     }).join("");
// };

// function onPictureShowModalClick(e) {
//     e.preventDefault();

//     if (e.target.nodeName !== 'IMG') {
//         return;
//     }

//     const pictureCard = basicLightbox.create(
//         `<img src="${e.target.dataset.source}" width="800" height="600">`);
//     pictureCard.show();

//     if (pictureCard.visible()) {
//         pictureContainer.addEventListener('keydown', (e) => {
//             if (e.code === 'Escape') {
//                 pictureCard.close()
//             }
//         }
//         );
//     };
// }