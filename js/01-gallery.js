import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryCard = ({ preview, original, description } = {}) => {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};
const galleryAr = galleryItems.map((el) => galleryCard(el));

galleryList.insertAdjacentHTML("afterbegin", galleryAr.join(""));

// Модальне вікно

const onImageClick = (event) => {
  // відмінна дії за замовчуванням
  event.preventDefault();

  const currentTarget = event.target;
  // перевірка на картинку

  if (currentTarget.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src ="${currentTarget.dataset.source}" width="800"height="600">`
  );
  const escapeHandler = (event) => {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", escapeHandler);
    }
  };
  instance.show();
  document.addEventListener("keydown", escapeHandler);
};
galleryList.addEventListener("click", onImageClick);
