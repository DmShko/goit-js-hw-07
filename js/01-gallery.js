import { galleryItems } from './gallery-items.js';
// Change code below this line

// add event to father element
const galleryElement = document.querySelector("ul.gallery");

// event handler
galleryElement.addEventListener('click', e => {
   
    if(!e.target.nodeName === "A") return;
    e.preventDefault();
    const instance = basicLightbox.create(`
    img ${e.target.children[0].innerHTML}`
)
    console.log(instance);

}, { once: true });


console.log(galleryItems);
