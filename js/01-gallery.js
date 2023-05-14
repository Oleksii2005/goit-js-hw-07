import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryElements = [];

galleryItems.forEach((galleryItem) => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");

  item.classList.add("gallery__item");
  link.classList.add("gallery__link");
  image.classList.add("gallery__image");

  link.href = galleryItem.original;
  image.src = galleryItem.preview;
  image.alt = galleryItem.description;

  image.dataset.source = galleryItem.original;

  item.append(link);
  link.append(image);

  galleryElements.push(item);
});

gallery.append(...galleryElements);

console.log(galleryElements);

document.querySelector(".gallery").onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src='https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg'>
	`
    )
    .show();
};
