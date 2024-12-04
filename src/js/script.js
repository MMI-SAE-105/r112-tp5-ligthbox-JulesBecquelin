
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


function closeLightbox() {
  lightbox.close();
  lightboxImage.src = ''; 
}


images.forEach(img => img.addEventListener('click', openLightbox));


lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox.open) {
    closeLightbox();
  }
});
