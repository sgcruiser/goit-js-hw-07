const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('js-gallery');

galleryRef.append(
  ...images.map((item, index) => {
    const liImagesRef = document.createElement('li');
    liImagesRef.classList.add('js-gallery__item');
    liImagesRef.insertAdjacentHTML(
      'afterbegin',
      `<img src=${images[index].url} alt=${images[index].alt} width=800px>`,
    );
    return liImagesRef;
  }),
);
