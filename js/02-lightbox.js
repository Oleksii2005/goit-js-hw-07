// import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// const galleryList = document.querySelector(".gallery");
// const galleryCard = ({ preview, original, description } = {}) => {
//   return `<li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//      <img
//      class="gallery__image"
//      src="${preview}"
//      alt="${description}" />
//   </a>
// </li>`;
// };
// const galleryAr = galleryItems.map((el) => galleryCard(el));

// galleryList.insertAdjacentHTML("afterbegin", galleryAr.join(""));

// // Модальне вікно

// const onImageClick = (event) => {
//   // відмінна дії за замовчуванням
//   event.preventDefault();

//   const currentTarget = event.target;
//   // перевірка на картинку

//   if (currentTarget.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(
//     `<img src ="${currentTarget.dataset.source}" width="800"height="600">`
//   );
//   const escapeHandler = (event) => {
//     if (event.code === "Escape") {
//       instance.close();
//       document.removeEventListener("keydown", escapeHandler);
//     }
//   };
//   instance.show();
//   document.addEventListener("keydown", escapeHandler);
// };
// const lightbox = new SimpleLightbox(".gallery a", {
//   captions: true,
//   captionPosition: "bottom",
//   captionsData: "alt",
//   captionDelay: 250,
// });
// galleryList.addEventListener("click", onImageClick);

import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

const galleryElements = [];

galleryItems.forEach((galleryItem) => {
  const item = document.createElement("li");
  item.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = galleryItem.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = galleryItem.preview;
  img.alt = galleryItem.description;

  item.appendChild(link);
  link.appendChild(img);

  galleryElements.push(item);
});

list.append(...galleryElements);
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});
