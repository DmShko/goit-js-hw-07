import { galleryItems } from './gallery-items.js';
// Change code below this line

// add event to father element
const galleryElement = document.querySelector("ul.gallery");

// event handler
galleryElement.addEventListener('click', e => {
    
    if(!e.target.nodeName === "IMG") return;
    e.preventDefault();
    const instance = basicLightbox.create(`
    <img ${e.target.innerHTML}
    >`);
    instance.show();

});

console.log(galleryItems);
