import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import  {galleryItems} from './gallery-items';

console.log(galleryItems);

const refs = {
    galleryContainer: document.querySelector(".gallery"),
 };

 const imagesTemplate = ({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a> `;
  };
 
const addImage = galleryItems.map(imagesTemplate).join("");
refs.galleryContainer.insertAdjacentHTML("afterbegin", addImage);

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
	captionsData: "alt",
	captionDelay: 250,
});
