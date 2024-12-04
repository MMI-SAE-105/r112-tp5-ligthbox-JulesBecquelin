
const images = document.querySelectorAll('ul li img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');


function openLightbox(event) {
  const fullImgSrc = event.target.getAttribute('data-full-img');
  lightboxImage.src = fullImgSrc;
  lightboxImage.classList.remove('loaded'); 
  lightbox.showModal();

  
  lightboxImage.onload = () => {
    lightboxImage.classList.add('loaded');
  };
}



