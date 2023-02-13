const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('.gallery');

const makeGalleryMarkup = images.map(({ url, alt }) => 
  `<li><img src="${url}" alt="${alt}" width="320" height="200"></li>`
).join('');

galleryListEl.insertAdjacentHTML("afterbegin", makeGalleryMarkup);

/*
Write a script to create a gallery of images from an array of data.
There is a list, ul.gallery, in HTML.

1. Use an array of objects images to create <img> elements nested in <li>.
Use template strings and the insertAdjacentHTML() method to create markup.

2. All gallery items must be added to DOM in one insert operation.
3. Add at least some gallery design with flexboxes or grids using CSS classes.
*/