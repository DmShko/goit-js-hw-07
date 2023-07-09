import { galleryItems } from './gallery-items.js';
// Change code below this line

// add event to father element
const galleryElement = document.querySelector("ul.gallery");

function addMarkup() {
// get atribut from 'galleryItems'
    return galleryItems.map(element => 
      `
     <li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img 
                class="gallery__image"
                src="${element.preview}"  
                alt = ""
                title="${element.description}" 
            > 
        </a>
      </li>`
    ).join("");
}

// call create murkup function
const getAttribute = addMarkup();

// add content to 'gallery'
galleryElement.innerHTML = getAttribute;

// event handler
galleryElement.addEventListener('click', e => {
    e.preventDefault();
    let gallery = new SimpleLightbox('.gallery a',
    {captions: true,
     captionSelector: 'img',   
     captionType: 'attr',
     captionPosition: 'bottom',
     captionDelay: 250,
     showCounter: false,});
    
    gallery.open(); 
});

console.log(galleryItems);
