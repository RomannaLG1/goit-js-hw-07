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
}

function selectImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );

  onClose: () => {
    document.removeEventListener("keydown", closeEscape);
  };

  instance.show();

  getGalleryEl.addEventListener("keydown", closeEscape);

  function closeEscape(event) {
    if (event.code === "Escape") instance.close();
  }
}
